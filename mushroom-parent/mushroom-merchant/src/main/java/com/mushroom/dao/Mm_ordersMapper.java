package com.mushroom.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.mushroom.merchant.vo.OrderAllFind;
import com.mushroom.pojo.Mm_orders;



public interface Mm_ordersMapper {
	
	public List<Map<String, Object>> selectOrderAll(OrderAllFind of); 
	
	public List<Map<String, Object>> selectOrderNum(@Param("shopid") Integer shopid);
	
	public List<Map<String, Object>> selectAdd(@Param("userid") Integer userid);
	
	public int updateByPrimaryKeySelective(Mm_orders mm);
	
	public int updateByPrimaryKey(@Param("orderItemId")  String orderItemId);
	
	public int updateconsolidated(@Param("orderItemId") String orderItemId);
	
}
