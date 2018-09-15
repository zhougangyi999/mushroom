package com.mushroom.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mushroom.annotation.RequestLimit;
import com.mushroom.pojo.Mm_users;
import com.mushroom.service.UserService;
import com.mushroom.tools.Constants;
import com.mushroom.tools.IndustrySMS;
import com.mushroom.tools.RedisUtil;

import com.mushroom.tools.SecurityUtils;
import com.mushroom.tools.StringUtils;

@Controller
public class LoginController {
	@Autowired
	private RedisUtil RedisUtil;

	@Autowired
	private UserService userService;


	/**
	 * 发送短信验证码
	 * 
	 * @param phone_num 手机号码
	 * @param session   一个三分钟过期的session
	 * @return
	 */
	 @RequestLimit(count = 3)
	@RequestMapping("/login_phone_code")
	@ResponseBody
	public Object login_phone_code(String phone_num, HttpSession session) {
		int phone_code = Integer.valueOf(StringUtils.randomNumbers(6));
	String result = IndustrySMS.execute(phone_num, String.valueOf(phone_code));
		System.out.println(phone_code);
		session.setAttribute("phone_code", phone_code);
		session.setAttribute("phone_num", phone_num);
		session.setMaxInactiveInterval(3 * 60);// 设置三分钟过期时间
	
		return result;
	}

	/**
	 * 验证用户的验证码是否输入正确
	 * @param phone_num 电话号码
	 * @param code_num 验证码
	 * @param session
	 * @return
	 */
	@SuppressWarnings("unused")
	@RequestMapping("/login_phone_isok")
	@ResponseBody
	public Object login_phone_isok(String phone_num, String code_num, HttpSession session) {
		int isok = 3;// 验证状态 1代表电话号码不一致 2代表验证码错误或者到期 3代表没问题
		if (code_num.equals("")||code_num==null) {
			isok = 1;
			return isok;
		}
			int ph_code = (int) session.getAttribute("phone_code");
			//String ph_num = (String) session.getAttribute("phone_num");
			int newcode = Integer.valueOf(code_num);
			System.out.println("newcode:" + newcode);
			if (newcode != ph_code || code_num == null || code_num == "") {
				isok = 2;
			}
			System.out.println("电话号码是否返回成功"+isok);
		return isok;

	}
	
	/**
	 * 
	 * qq登陆后验证码判断
	 * @param phone
	 * @param code
	 * @param session
	 * @param model
	 * @return
	 */
	@RequestMapping("/login_bind_phone")
	public String  login_bind_phone(String phone,String code,HttpSession session,Model model)  {
	String code_isok="验证码错误,请正确输入验证码.";
		int ph_code = (int) session.getAttribute("phone_code");
		String ph_num = (String) session.getAttribute("phone_num");
		int  new_code=Integer.valueOf(code);
		if (ph_code!=new_code||code==""||code==null) {
		model.addAttribute("code_isok", code_isok);
			return "register_butiful";
		}
		Mm_users muser=new Mm_users();
		muser.setPhone(phone);
		Mm_users session_muser=(Mm_users) session.getAttribute(Constants.USER_SESSION);
		muser.setUid(session_muser.getUid());
		userService.updateUser(muser);
		return "forward:go_to_index";
		
	}
	
	/**
	 * 电话号码登录
	 * @param phone_num 电话号码
	 * @param session
	 * @return
	
	//@RequestMapping(value="/login_phone_login")
	//@ResponseBody
public String login_phone_login(String phone_num,HttpSession session) {
		Mm_users muser=new Mm_users();
		muser.setPhone(phone_num);
		Mm_users muser1=userService.selectByParam(muser);
		if (muser1!=null ){
			System.out.println("该号码已经注册..直接登录");
			session.setAttribute(Constants.USER_SESSION, muser1);//存入登陆后的用户
			return "/index";
		}
		muser.setPassword(SecurityUtils.md5Hex(StringUtils.randomNumbers(6)));//产生一个六位随机数数经过md5加密后的密码
		muser.setHeadportraitsrc("http://s11.mogucdn.com/p2/161201/upload_64kcjf86057g7a9kbd1k38j85k5c4_100x100.jpg");
		muser.setReserved5("0");
		muser.setUsername(phone_num);
		userService.insertSelective(muser);//注册
		session.setAttribute(Constants.USER_SESSION, muser);//存入登陆后的用户
		return "index";
}
 */
	
}
