package com.mushroom.merchant.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.mushroom.merchant.service.BackstageShopService;
import com.mushroom.pojo.Mm_shop;
import com.mushroom.pojo.Mm_users;
import com.mushroom.tools.Constants;

@Controller
@RequestMapping("/merchant")
public class LoginMerchantController {
	
	@Autowired
	private BackstageShopService bs;
	

	@RequestMapping("/seller_center_main")
	public ModelAndView LoginMerchant(ModelAndView mav, HttpServletRequest request, HttpServletResponse response) {
		System.out.println("进入商家。。。");
		HttpSession session=request.getSession();
		
		Mm_users userAll=(Mm_users)session.getAttribute(Constants.USER_SESSION);
		Mm_shop shop=bs.selectShop(userAll.getUid());
		if(shop.getStats()==3)
			mav.setViewName("merchant/seller_center_main.html");
		else 
			mav.setViewName("merchant/407.html");
		session.setAttribute("shoplihao", shop.getShopid());
		this.textLogin(request, response,userAll);
		return mav; 
	}
	
	/**
	 * @param mav
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping("/Center_index.action")
	@ResponseBody
	public Map<String, Object> Center_index(ModelAndView mav, HttpServletRequest request, HttpServletResponse response) {
		HttpSession session=request.getSession();
		Mm_shop shops=(Mm_shop)session.getAttribute("shoplihao");
		Map<String, Object> shop=bs.selectByPrimaryKey(shops.getShopid());
		session.setAttribute("shopSession", shop);
		return shop;
	}

	public void textLogin (HttpServletRequest request, HttpServletResponse response,
			Mm_users currentUser) {
		HttpSession session = request.getSession();
		String username = "";
		ServletContext application = session.getServletContext();
		session.setAttribute("uname", currentUser.getUsername());
		username = currentUser.getUsername();
		saveCookie(username, response, request);// 将user保存到session中，注意要使用@SessionAttributes注释
		System.out.println("app:" + application.getAttribute(username));
		if (application.getAttribute(username) == null) { // 说明还没有用户登录
			session.setAttribute("admin", currentUser);
			session.setAttribute("admins", username);
			application.setAttribute(username, session.getId());
		}	

	}

	public void saveCookie(String username, HttpServletResponse response, HttpServletRequest request) {
		Cookie[] cookie = request.getCookies();
		for (Cookie c : cookie) {
			if ("userMe".equals(c.getName())) {
				c.setMaxAge(0);
				response.addCookie(c);
			}
		}
		// 实例化一个Cookie
		Cookie cookie1 = new Cookie("userMe", username);
		// 设置Cookie的生命期限10分钟
		cookie1.setMaxAge(1800);
		// 添加Cookie到客户端
		response.addCookie(cookie1);

	}

}
