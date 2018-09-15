package com.mushroom.dao;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import com.mushroom.pojo.Mm_users;



public interface easyui_demo_dao {
	  @Select("select * from mm_users ")
	    public List<Mm_users> stuinfo();
}
