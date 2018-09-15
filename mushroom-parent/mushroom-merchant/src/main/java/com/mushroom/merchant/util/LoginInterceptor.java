package com.mushroom.merchant.util;

import javax.servlet.ServletContext;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.boot.web.servlet.server.Session;
import org.springframework.web.servlet.HandlerInterceptor;

public class LoginInterceptor implements HandlerInterceptor {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		System.out.println("进入拦截器");
		HttpSession session = request.getSession();
		System.out.println(request.getServletPath());
		if ("/merchant/merchandise_in_sale_index.html".equals(request.getServletPath())||"/merchant/merchandise_in_sale_index".equals(request.getServletPath())) {
			System.out.println("进入出售");
			session.setAttribute("shopstatus", 2);
		}else if("/merchant/merchandise_in_warehouse_index.html".equals(request.getServletPath()) || "/merchant/merchandise_in_warehouse_index".equals(request.getServletPath())) {
			System.out.println("进入仓库");
			session.setAttribute("shopstatus", 1);
		}else if("/merchant/consignment_index.html".equals(request.getServletPath())){
			System.out.println(request.getAttribute("id")+"-------------------------------------------------------");
		}
		return true;
	}
	
	
	

}