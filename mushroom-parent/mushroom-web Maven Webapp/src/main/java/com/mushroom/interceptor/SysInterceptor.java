package com.mushroom.interceptor;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.mushroom.pojo.Mm_users;
import com.mushroom.tools.Constants;



/**
 * 拦截器
 * @author Administrator
 *
 */
public class SysInterceptor extends HandlerInterceptorAdapter {
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response ,Object handler) {
		HttpSession session=request.getSession();
	 	Mm_users u=(Mm_users) session.getAttribute(Constants.USER_SESSION);
		if(u==null){
			try {
				//
				response.sendRedirect(request.getContextPath()+"/401.jsp");
				System.err.println("进入拦截器");
			} catch (IOException e) {
				e.printStackTrace();
			}
			return false;
		}
		return true;
	}
}
