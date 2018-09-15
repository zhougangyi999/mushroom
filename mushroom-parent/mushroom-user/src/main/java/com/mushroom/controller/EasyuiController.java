package com.mushroom.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.mushroom.pojo.Mm_users;
import com.mushroom.service.impl.easy_service;
import com.mushroom.tools.FastJsonConvert;

@Controller
public class EasyuiController {

	@Autowired
	private easy_service easy_service;
	
	 /*
    用户信息列表
 */
 @GetMapping(value = "/stuinforlist")
 @ResponseBody
	public String name(HttpServletRequest request) {
      List<Mm_users>  stuinforlist=easy_service.stuinfo(); 
   String as  = FastJsonConvert.convertObjectToJSON(stuinforlist);
   System.out.println(as);
      return as;
		
	}
	
}
