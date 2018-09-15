package com.mushroom.merchant.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.mushroom.pojo.Mm_shop;


public interface BackstageShopService {
	
	public Map<String, Object> selectByPrimaryKey(Integer shopId) ;
	
	public Mm_shop selectShop(Integer userid);
	
	public String userStatic(Integer userid);
	
	 public boolean insertShops(Mm_shop ms);
	
}
