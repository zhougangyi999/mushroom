package com.mushroom.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mushroom.pojo.Mm_category;
import com.mushroom.pojo.Mm_commodity;
import com.mushroom.service.HomeClassServer;
import com.mushroom.tools.RedisUtil;

@Controller
public class HomeClassController {

	@Autowired
	private HomeClassServer hcserver;

	@Resource
	private RedisUtil redisUtil;
	
	/**
	 * 加载主页
	 * @param model
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "null" })
	@RequestMapping("/go_to_index")
	public String go_to_index(Model model) {
		List<Mm_category> cate_list=null;
		redisUtil.remove("max_cate");
if (redisUtil.exists("max_cate")==false) {
	cate_list=hcserver.select_maxcate();
	redisUtil.set("max_cate", cate_list);
}else {
cate_list=(List<Mm_category>) redisUtil.get("max_cate");
}
Map<String,Object> erji_map=new HashMap<String, Object>();
Map<String, Object> sanji_map=new HashMap<String, Object>();
if (redisUtil.exists("erji_map")==false||redisUtil.exists("sanji_map")==false) {	//没有存入map
	for (Mm_category mm_category : cate_list) {
		
		List<Mm_category> list=hcserver.selelct_erjicate(mm_category.getCategoryid());
		
		for (Mm_category mm_list : list) {
			List<Mm_category> listsan=hcserver.selelct_sanjicate(mm_list.getCategoryid());
			sanji_map.put(mm_list.getName(), listsan);
		}
		mm_category.setErji_category(list);
		erji_map.put(mm_category.getName(), list);	
	}
	redisUtil.set("erji_map", erji_map);
	redisUtil.set("sanji_map", sanji_map);
}else {

	erji_map=	(Map<String, Object>) redisUtil.get("erji_map");
	sanji_map=	(Map<String, Object>) redisUtil.get("sanji_map");
}
List<Mm_commodity> list_acs=new ArrayList<>();
if (redisUtil.exists("selelct_asc_shop")==false) {
	list_acs=	hcserver.selelct_asc_shop();
	redisUtil.set("selelct_asc_shop", list_acs);
}else {
	list_acs=(List<Mm_commodity>) redisUtil.get("selelct_asc_shop");
}
model.addAttribute("list_acs",list_acs);
model.addAttribute("erji_map",erji_map);//存入二级分类map
model.addAttribute("cate_list",cate_list);
model.addAttribute("sanji_map",sanji_map);//存入三级分类map

return "index";	
	}
	
	
	
}
