package com.mushroom.merchant.service;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.github.pagehelper.Page;
import com.mushroom.merchant.vo.MerUtilVo;
import com.mushroom.pojo.Mm_commodity;
import com.mushroom.pojo.Mm_commodity_attribute;



public interface MmcommodityService {
	
	
	
	public Page<Map<String, Object>> findCommodity(MerUtilVo me,Integer pageNow);

	
	public List<Map<String, Object>> selectCategory();
	
	public boolean saveCom(Mm_commodity mc,Mm_commodity_attribute nc);
	
	public boolean comdityDel(String [] arr);
	
	public boolean updateByPrimaryKey(Integer shopstatus,String [] arr);
	 

}
