package com.mushroom.merchant.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.crypto.Mac;
import javax.mail.Folder;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.apache.catalina.core.ApplicationContext;
import org.apache.catalina.manager.DummyProxySession;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.apache.commons.io.FilenameUtils;
import org.apache.ibatis.javassist.expr.NewArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.annotation.JsonTypeInfo.Id;
import com.github.pagehelper.Page;
import com.mushroom.merchant.service.AttributenameService;
import com.mushroom.merchant.service.MmcommodityService;
import com.mushroom.merchant.util.DivTextUtil;
import com.mushroom.merchant.vo.MerUtilVo;
import com.mushroom.merchant.vo.PageAllVo;
import com.mushroom.pojo.Mm_commodity;
import com.mushroom.pojo.Mm_commodity_attribute;
import com.mushroom.pojo.Mm_shop;
import com.mushroom.pojo.Mm_users;
import com.mushroom.tools.Constants;
import com.mushroom.tools.RedisUtil;

@Controller
@RequestMapping("/merchant")
public class ShipmentsMerchantController {

	@Autowired
	private MmcommodityService ms;

	@Autowired
	private RedisUtil redis;

	@Autowired
	private AttributenameService ams;
	
	private static String text="";
	
	
	
	static{
		text=DivTextUtil.getDivTextUtil().readFileByLines("D:/workspce2016/mushroom-parent/mushroom-merchant/src/main/resources/DivTextAll.text");
		
	}

	@RequestMapping("/shipments")
	public ModelAndView shipments(ModelAndView mav) {
		
		System.out.println("进入发布商品");
		List<Map<String, Object>> sk = ams.findAttribute();
		mav.addObject("aname", sk);
		mav.setViewName("merchant/shipments.html");

		return mav;

	}
	
	private static String UPLOAD_DIRECTORY = "";


	@RequestMapping(value = "/commdityFabu", method = RequestMethod.POST)
	public String commdityFabu(Model md, @RequestParam("picpath") MultipartFile[] files, HttpServletRequest request
			,Mm_commodity mc,@RequestParam("category") String category,@RequestParam("attvalue") String attvalue) {
		String[] attvalues=null;
		Mm_commodity_attribute nc=new Mm_commodity_attribute();
		if(attvalue!=""){
			attvalues=attvalue.split("-");
		}
		for (int i = 0; i < attvalues.length; i++) {
			int itme=Integer.valueOf(attvalues[i]);
			if(i==0)
				nc.setAttributeValueId(itme);
			if(i==1)
				nc.setCommodityNameD(itme);	
		}
		
		
		String[] categorys=null;
		if(category!=""){
			categorys=category.split("-");
		}
		for (int i = 0; i < categorys.length; i++) {
			int itme=Integer.valueOf(categorys[i]);
			if(i==0)
				mc.setCategoryid(itme);
			if(i==1)
				mc.setCategoryid2(itme);
			if(i==2)
				mc.setCategoryid3(itme);
			
		}
		 ServletContext sc = request.getSession().getServletContext();  
         // 上传位置  
         String path = sc.getRealPath("merchant/imgs/");
         
		  //判断file数组不能为空并且长度大于0
        if (files != null && files.length > 0) {
            //循环获取file数组中得文件
            for (int i = 0; i < files.length; i++) {
                MultipartFile file = files[i];
               
                if(mc.getMainImg()==""||mc.getMainImg()==null)
                	mc.setMainImg("/merchant/imgs/"+file.getOriginalFilename());
                else if(i==2)
                	mc.setImg1("/merchant/imgs/"+file.getOriginalFilename());
                else if(i==3)
                	mc.setImg2("/merchant/imgs/"+file.getOriginalFilename());
                System.out.println(path+file.getOriginalFilename());
                // 转存文件
                try {
                    file.transferTo(new File(path+file.getOriginalFilename()));
                } catch (IOException e) {
                	System.out.println("...................................");
                }
            }
        }
        
        int uid=((Mm_users)request.getSession().getAttribute(Constants.USER_SESSION)).getUid();
        int shops=Integer.valueOf(request.getSession().getAttribute("shoplihao").toString());
		mc.setShopId(shops);
		mc.setShopstatus(1);
        mc.setUserid(uid);
        mc.setSpu(0);
        mc.setComments(0);
        mc.setDiscount(0.9f);  
        String s=text.replace("title000",mc.getTitle());
        s=s.replace("imgpath000",mc.getMainImg());
        s=s.replace("imgpath0000",mc.getImg1());
        s=s.replace("bor0101",mc.getDescribes());
        mc.setDescribes(s);
        if(ms.saveCom(mc,nc))
        	//跳转视图
    		return "forward:merchandise_in_warehouse_index";
        return "forward:404.html";
        
	}

	@RequestMapping("/merchandise_in_warehouse")
	@ResponseBody
	public PageAllVo warehouse(Model mav, MerUtilVo me,
			@RequestParam(name = "pageNow", defaultValue = "1") Integer pageNow, HttpServletRequest request) {
		
		HttpSession session = request.getSession();
		Integer shopstatus = (int) session.getAttribute("shopstatus");
		int shops=Integer.valueOf(session.getAttribute("shoplihao").toString());
		me.setShopId(shops);
		me.setShopstatus(shopstatus);
		Page<Map<String, Object>> pageAll = ms.findCommodity(me, pageNow);
		PageAllVo sn = new PageAllVo(pageAll.getResult(), pageAll.getPages(), pageAll.getPageNum(), pageAll.getTotal());
		return sn;
	}

	@RequestMapping("/merchandise")
	@ResponseBody
	public List<Map<String, Object>> ware() {
		return ms.selectCategory();
	}

	@RequestMapping("/merchandise_in_sale_index")
	public ModelAndView sale(ModelAndView mav) {
		mav.setViewName("redirect:/merchant/merchandise_in_sale_index.html");
		return mav;

	}

	@RequestMapping("/merchandise_in_warehouse_index")
	public ModelAndView sksk(ModelAndView mav) {
		mav.setViewName("redirect:/merchant/merchandise_in_warehouse_index.html");
		return mav;

	}
	
	@RequestMapping("/comdityDel")
	@ResponseBody
	private boolean comdityDel(@RequestParam("selector") String[] arr,@RequestParam("staut") String staut) {
		if("del".equals(staut))
			return ms.comdityDel(arr);
		else if("xiaja".equals(staut))
			return ms.updateByPrimaryKey(1, arr);
		else if("shanja".equals(staut))
			return ms.updateByPrimaryKey(2, arr);
		return false;
		

	}
	
	
	
	
	
	
	
	

}
