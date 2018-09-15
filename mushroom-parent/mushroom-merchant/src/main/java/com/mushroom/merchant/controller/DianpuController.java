package com.mushroom.merchant.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.mushroom.merchant.service.BackstageShopService;
import com.mushroom.merchant.service.Mm_ordersService;
import com.mushroom.merchant.util.AddressUtils;
import com.mushroom.pojo.Mm_shop;
import com.mushroom.pojo.Mm_users;
import com.mushroom.tools.Constants;

@Controller
@RequestMapping("/merchant")
public class DianpuController {

	@Autowired
	private BackstageShopService bs;

	@Autowired
	private Mm_ordersService ms;

	@RequestMapping("/")
	public ModelAndView dianpu(ModelAndView mav, HttpSession session) {
		System.out.println("进入商家后台");
		//Mm_users userAll = new Mm_users(18, "admin", "admin");
		//session.setAttribute("userAll", userAll);
		Mm_users users = (Mm_users) session.getAttribute(Constants.USER_SESSION);
		String sta = bs.userStatic(users.getUid());
		if (sta == null || "-1".equals(sta))

			mav.setViewName("merchant/be_opened_for_occupancy.html");
		else
			mav.setViewName("forward:seller_center_main");

		return mav;

	}

	@RequestMapping("/addShopAct")
	private String addShopAct(HttpServletRequest request, Mm_shop ms, @RequestParam("address") String address) {
		Mm_users users = (Mm_users) request.getSession().getAttribute(Constants.USER_SESSION);
		Mm_shop shop = bs.selectShop(users.getUid());
		if (shop.getStats() == 1 || shop.getStats() == 2)
			return "merchant/407.html";

		List<Map<String, Object>> addsList = this.ms.selectAdd(users.getUid());
		for (Map<String, Object> map : addsList) {
			ms.setAddressid((int) map.get("addressId"));
			ms.setRegionidProvince((int) map.get("province"));
			ms.setRegionidDistrict((int) map.get("city"));

		}
		ms.setStats(1);
		ms.setCategiryid(2);
		ms.setUserid(users.getUid().toString());

		if (bs.insertShops(ms))
			return "forward:seller_center_main";
		return "merchant/407.html";
	}

}
