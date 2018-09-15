package com.mushroom.merchant.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.github.pagehelper.Page;
import com.mushroom.merchant.vo.OrderAllFind;
import com.mushroom.pojo.Mm_orders;

public interface Mm_ordersService {
	
	public List<Map<String, Object>> selectOrderAll(Integer pageNow,OrderAllFind of); 

	public Page<Map<String, Object>> selectOrderNum(Integer shopid,Integer pageNow);
	
	public List<Map<String, Object>> selectAdd(Integer userid);
	
	public boolean updateByPrimaryKeySelective(Mm_orders mm);
	
}
