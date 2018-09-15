package com.mushroom.service;

import java.util.List;

import com.mushroom.pojo.Mm_address;
import com.mushroom.pojo.Mm_region;

public interface User_Address_Service {
	/**
	 * 查找全部的省
	 * @return
	 */
	List<Mm_region>  sellectprovince();
	
	/**
	 * 查找对应省的市
	 * @param mregion
	 * @return
	 */
	List<Mm_region> selectcity(Mm_region mregion);
	
	/**
	 * 查找对应市的区/县
	 * @param mregion
	 * @return
	 */
	List<Mm_region> selectarea(Mm_region mregion);
	/**
	 * 根据id查找地名
	 * @param mregion
	 * @return
	 */
Mm_region byidselect_address(Mm_region mregion);

/**
 * 插入用户地址
 * @param mm_address
 * @return
 */
int insertSelective(Mm_address mm_address);
/**
 * 根据用户id查询地址
 * @param userid
 * @return
 */
List<Mm_address> selectByPrimaryKey(int userid);
/**
 * 条件更新
 * @param mm_address
 * @return
 */
int updateByPrimaryKeySelective(Mm_address mm_address);
/**
 * 根据用户id更新是否默认收货状态
 * @param userid
 * @return
 */
int updateDefault_take (int userid);

/**
 * 根据地址id查询地址
 * @param addressid
 * @return
 */
Mm_address select_address_id(int addressid);
/**
 * 删除
 * @param addressid
 * @return
 */
int deleteByPrimaryKey(Integer addressid);
}
