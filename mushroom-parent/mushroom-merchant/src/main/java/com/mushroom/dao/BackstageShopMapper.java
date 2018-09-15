package com.mushroom.dao;

import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.mushroom.pojo.Mm_shop;



public interface BackstageShopMapper {
    public Map<String, Object> selectByPrimaryKey(@Param("shopId") Integer shopId);
    
    public Mm_shop selectShop(@Param("userid") Integer userid);
    
    public String userStatic(@Param("uid") Integer userid);
    
    public int insertShops(Mm_shop ms);


}