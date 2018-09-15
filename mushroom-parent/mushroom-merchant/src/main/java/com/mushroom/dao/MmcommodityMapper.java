package com.mushroom.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.mushroom.merchant.vo.MerUtilVo;
import com.mushroom.pojo.Mm_commodity;
import com.mushroom.pojo.Mm_commodity_attribute;


public interface MmcommodityMapper {
	
	public List<Map<String, Object>> selectCommodity(MerUtilVo me);
	
	public List<Map<String, Object>> selectCategory();
	
	public int insert(Mm_commodity mc);
	
	public int comdityDel(@Param("commodityId")int commodityId);
	
	public int updateByPrimaryKey(@Param("shopstatus")Integer shopstatus,@Param("commodityId")Integer commodityId);
 
	public int insertArtter(Mm_commodity_attribute ma);
	
	public int selectMaxid();
}
