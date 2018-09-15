package com.mushroom.merchant.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.http.HttpRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.github.pagehelper.Page;
import com.mushroom.merchant.service.Mm_ordersService;
import com.mushroom.merchant.vo.OrderAllFind;
import com.mushroom.merchant.vo.PageAllVo;

@Controller
@RequestMapping("/merchant")
public class SoldMerchantController {
	@Autowired
	private Mm_ordersService ms;
	
	@RequestMapping("/sold_goods")
	public ModelAndView sold_Goods(ModelAndView mav) {
		System.out.println("进入出售的商品");
		mav.setViewName("merchant/sold_goods_index.html");
		return mav;

	}
	
	@RequestMapping("/shopidOrders")
	@ResponseBody
	private PageAllVo shopidOrders(OrderAllFind of,HttpServletRequest request,@RequestParam(name = "pageNow", defaultValue = "1") Integer pageNow) {
		HttpSession session = request.getSession();
		int shops=Integer.valueOf(session.getAttribute("shoplihao").toString());
		of.setShopid(shops);
		Page<Map<String, Object>> pageAll = ms.selectOrderNum(of.getShopid(), pageNow);
		
		List<Map<String, Object>> pageAlls = ms.selectOrderAll(pageNow, of);
		PageAllVo sn = new PageAllVo(pageAll.getResult(), pageAll.getPages(), pageAll.getPageNum(), pageAll.getTotal());
		sn.setListpa(pageAlls);
		return sn;

	}

}
