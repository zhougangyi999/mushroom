package com.mushroom.merchant.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.mushroom.merchant.service.Mm_ordersService;
import com.mushroom.merchant.vo.OrderAllFind;
import com.mushroom.pojo.Mm_orders;
import com.mushroom.pojo.Mm_users;
import com.mushroom.tools.Constants;

@Controller
@RequestMapping("/merchant")
public class ConsignmentMercahntController {
	@Autowired
	private Mm_ordersService ms;
	
	@RequestMapping("/consignment")
	public ModelAndView consignment(ModelAndView mav,@RequestParam("id") String id) {
		System.out.println("进入发货");
		
		mav.setViewName("merchant/consignment_index.html");
		return mav;

	}
	
	@RequestMapping("/consignmentAll")
	@ResponseBody
	public List<Map<String, Object>> consignmentAll(HttpServletRequest request, ModelAndView mav,@RequestParam("id") String id) {
		//System.out.println("进入发货");
		
		OrderAllFind sk=new OrderAllFind();
		HttpSession session = request.getSession();
		int shops=Integer.valueOf(session.getAttribute("shoplihao").toString());
		sk.setShopid(shops);
		sk.setOrdernums(id);
		//System.out.println(sk.getOrdernums());
		List<Map<String, Object>> list= ms.selectOrderAll(1,sk);
		System.out.println(list);
		return list;

	}
	
	@RequestMapping("/consignmentadd")
	@ResponseBody
	public List<Map<String, Object>> consignmentadd(HttpServletRequest request, ModelAndView mav,@RequestParam(name="uid", defaultValue = "0")Integer uid) {
		HttpSession session = request.getSession();
		int shops=0;
		if(uid==0)
			shops=((Mm_users)session.getAttribute(Constants.USER_SESSION)).getUid();
		else
			shops=uid;
		//System.out.println(sk.getOrdernums());
		List<Map<String, Object>> list= ms.selectAdd(shops);
		System.out.println(list);
		return list;

	}
	
	
	@RequestMapping("/resultconsignment")
	public ModelAndView resultconsignment(HttpServletRequest request, ModelAndView mav,@RequestParam(name="num", defaultValue = "0")String num
			,@RequestParam(name="sameLogisCompanyId", defaultValue = "0")String sameLogisCompanyId
			,@RequestParam(name="test", defaultValue = "0")String test,@RequestParam(name="id", defaultValue = "0")String id) {
		Mm_orders mo=new Mm_orders();
		mo.setStatus(3);
		mo.setTrackingNumber(num);
		mo.setLogisticsCompany(sameLogisCompanyId);
		mo.setRemark(test);
		mo.setOrderNum(id);
		if(ms.updateByPrimaryKeySelective(mo))
			mav.setViewName("/merchant/sold_goods_index.html");
		else 
			mav.setViewName("/merchant/407.html");
		return mav;

	}
	
	
	

}
