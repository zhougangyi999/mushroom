package com.mushroom.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mushroom.dao.easyui_demo_dao;
import com.mushroom.pojo.Mm_users;

@Service
public class easy_service {
	 @Autowired
	    public easyui_demo_dao easyui_demo_daos;

	 
	 public List<Mm_users> stuinfo(){
	        return easyui_demo_daos.stuinfo();
	    }
}
