package com.mushroom.controller;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.common.SolrDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.redis.RedisProperties.Jedis;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.Assert;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mushroom.pojo.Mm_address;
import com.mushroom.pojo.Mm_region;
import com.mushroom.pojo.Mm_users;
import com.mushroom.pojo.mm_groupon;
import com.mushroom.service.User_Address_Service;
import com.mushroom.tools.Constants;
import com.mushroom.tools.FastJsonConvert;

import com.mushroom.tools.JedisUtil;
import com.mushroom.tools.RedisUtil;

@Controller
public class AddressController {
	@Autowired
	private User_Address_Service UaService;
	@Resource
	private RedisUtil redisUtil;
	@Resource
	private FastJsonConvert json;

	/**
	 * 
	 * 返回全部的省d
	 * 
	 * @param session
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping("/selectprovinces")
	@ResponseBody
	public Object sellectprovinces(HttpSession session) {

		if (redisUtil.exists("selectprovince") == false) {
			List<Mm_region> region = UaService.sellectprovince();
			region.remove(0);
			redisUtil.set("selectprovince", FastJsonConvert.convertObjectToJSON(region).toString());
			return region;
		} else {
			String regions = (String) redisUtil.get("selectprovince");
			return regions;
		}

	}

	/**
	 * 返回对应省的市
	 * 
	 * @param provincesid
	 * @return
	 */
	@RequestMapping("/selectcity")
	@ResponseBody
	public Object selectcity(String provincesid, HttpSession session) {
		Mm_region mregion = new Mm_region();
		if (redisUtil.exists("selectcity" + provincesid)) {
			String city = (String) redisUtil.get("selectcity" + provincesid);
			session.setAttribute("user_city_session", FastJsonConvert.convertJSONToArray(city, Mm_region.class));
			return city;
		} else {
			int pid = Integer.valueOf(provincesid);
			mregion.setParentid(pid);
			List<Mm_region> citylist = UaService.selectcity(mregion);
			redisUtil.set("selectcity" + provincesid, FastJsonConvert.convertObjectToJSON(citylist).toString());
			session.setAttribute("user_city_session", citylist);
			return citylist;
		}

	}

	/**
	 * 根据市查找区/县
	 * 
	 * @param cityid
	 * @return
	 */
	@RequestMapping("/selectarea")
	@ResponseBody
	public Object selectarea(String cityid, HttpSession session) {
		Mm_region mregion = new Mm_region();
		if (redisUtil.exists("selectarea" + cityid)) {
			String city = (String) redisUtil.get("selectarea" + cityid);
			session.setAttribute("user_area_session", FastJsonConvert.convertJSONToArray(city, Mm_region.class));
			return city;
		} else {
			int cid = Integer.valueOf(cityid);
			mregion.setParentid(cid);
			List<Mm_region> citylist = UaService.selectarea(mregion);
			session.setAttribute("user_area_session", citylist);
			redisUtil.set("selectarea" + cityid, FastJsonConvert.convertObjectToJSON(citylist).toString());
			return citylist;
		}

	}

	/**
	 * 市/街回显
	 * 
	 * @param city_id
	 * @param jie1
	 * @return
	 */
	@RequestMapping("/byidselect_address")
	@ResponseBody
	public String[] byidselect_address(String city_id, String jie1) {
		System.out.println(city_id + ":" + jie1);
		String[] allname = allname = new String[2];
		Mm_region m1 = new Mm_region();
		m1.setParentid(Integer.valueOf(city_id));
		Mm_region m2 = new Mm_region();
		m2.setParentid(Integer.valueOf(jie1));
		Mm_region mregion_city = UaService.byidselect_address(m1);
		Mm_region mregion_city1 = UaService.byidselect_address(m2);
		// allname=mregion_city.getName(),mregion_city1.getName();
		allname[0] = mregion_city.getName();
		allname[1] = mregion_city1.getName();
		return allname;

	}

	/**
	 * 查找用户的并进入地址管理
	 * 
	 * @param model
	 * @param session
	 * @return
	 */
	@RequestMapping("/go_user_address")
	public String go_user_address(Model model, HttpSession session) {
		Mm_users muser = (Mm_users) session.getAttribute(Constants.USER_SESSION);
		List<Mm_address> addresslist = UaService.selectByPrimaryKey(muser.getUid());
		for (Mm_address mm : addresslist) {
			String newphone = mm.getCollectphone().substring(0, 3) + "****"
					+ mm.getCollectphone().substring(7, mm.getCollectphone().length());
			mm.setCollectphone(newphone);
			System.out.println("地址状态" + mm.getIddefaultTake());
		}
		model.addAttribute("user_addresslist", addresslist);
		return "user_up_address";
	}

	/**
	 * 新增用户收货地址
	 * or
	 * 修改用户收货地址
	 * @param sheng
	 * @param city
	 * @param area
	 * @param email
	 * @param jiedao
	 * @param reserved1
	 * @param phone
	 * @param session
	 * @return
	 */
	@RequestMapping("/user_add_address")
	@ResponseBody
	public Object user_add_address(String sheng, String addressid, String city, String area, String email,String isDefault_take,
			String jiedao, String reserved1, String phone, HttpSession session) {
		Mm_address maddress = new Mm_address();
		String isok = "as";
		Mm_users muser = (Mm_users) session.getAttribute(Constants.USER_SESSION);
		maddress.setUserid(muser.getUid());
		maddress.setProvince(Integer.valueOf(sheng));
		maddress.setCity(Integer.valueOf(city));
		maddress.setDistrict(Integer.valueOf(area));
		maddress.setIddefaultTake(0);
		maddress.setPostalcode(email);
		maddress.setCollectphone(phone);
		maddress.setAddress(jiedao);
		maddress.setReserved1(reserved1);
		System.out.println("报错位置为:"+isDefault_take);
		if (!isDefault_take.equals("")) {
			maddress.setIddefaultTake(Integer.valueOf(isDefault_take));
		}
	
		if ("".equals(addressid)) {
			// 没有添加过相同的
			int oknum = UaService.insertSelective(maddress);
			if (oknum > 0)
				isok = "cg";
		} else {// 添加过 修改
			maddress.setAddressid(Integer.valueOf(addressid));
			UaService.updateByPrimaryKeySelective(maddress);// 更新

			isok = "xg";
		}

		return isok;

	}

	/**
	 * 根据地址id更新地址
	 * @param addressId
	 * @param session
	 * @return
	 */
	@RequestMapping("/update_isDefault_take")
	@ResponseBody
	public int update_isDefault_take(String addressId, HttpSession session) {
		Mm_users muser = (Mm_users) session.getAttribute(Constants.USER_SESSION);
		UaService.updateDefault_take(muser.getUid());
		Mm_address maddress = new Mm_address();
		maddress.setAddressid(Integer.valueOf(addressId));// 更新
		maddress.setIddefaultTake(1);
		int as = UaService.updateByPrimaryKeySelective(maddress);
		int bq = 0;
		if (as > 0)
			bq = 1;

		return bq;

	}

	/**
	 * 根据地址id回选
	 * @param addressid
	 * @param model
	 * @return
	 */
	@RequestMapping("by_addressid_selelct")
	@ResponseBody
	public Object select_address_id(String addressid, Model model) {
		Mm_address maddress = UaService.select_address_id(Integer.valueOf(addressid));
		return maddress;

	}
	@RequestMapping("delete_useraddress")
	@ResponseBody
	public Object	delete_useraddress(String addressid) {
	int as=	UaService.deleteByPrimaryKey(Integer.valueOf(addressid));
		return as;
		
		
		
	}


}
