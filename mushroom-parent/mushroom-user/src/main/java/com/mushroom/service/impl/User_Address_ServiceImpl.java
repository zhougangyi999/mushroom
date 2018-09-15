package com.mushroom.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mushroom.dao.User_Address_Dao;
import com.mushroom.pojo.Mm_address;
import com.mushroom.pojo.Mm_region;
import com.mushroom.service.User_Address_Service;

@Service
public class User_Address_ServiceImpl implements User_Address_Service {

	@Autowired
	private User_Address_Dao Uad;
	
	
	/* (non-Javadoc)
	 * 查找全部的省
	 * @see com.mushroom.service.User_Address_Service#sellectprovince()
	 */
	@Override
	public List<Mm_region> sellectprovince() {
		// TODO Auto-generated method stub
		return Uad.selectprovince();
	}


	@Override
	public List<Mm_region> selectcity(Mm_region mregion) {
		// TODO Auto-generated method stub
		return Uad.selectcity(mregion);
	}


	@Override
	public List<Mm_region> selectarea(Mm_region mregion) {
		// TODO Auto-generated method stub
		return Uad.selectarea(mregion);
	}


	@Override
	public Mm_region byidselect_address(Mm_region mregion) {
		// TODO Auto-generated method stub
		return Uad.byidselect_address(mregion);
	}


	@Override
	public int insertSelective(Mm_address mm_address) {
		// TODO Auto-generated method stub
		return Uad.insertSelective(mm_address);
	}


	@Override
	public List<Mm_address> selectByPrimaryKey(int userid) {
		// TODO Auto-generated method stub
		return Uad.selectByPrimaryKey(userid);
	}


	@Override
	public int updateByPrimaryKeySelective(Mm_address mm_address) {
		// TODO Auto-generated method stub
		return Uad.updateByPrimaryKeySelective(mm_address);
	}


	public int updateDefault_take(int userid) {
		return Uad.updateDefault_take(userid);
	}


	@Override
	public Mm_address select_address_id(int addressid) {
		// TODO Auto-generated method stub
		return Uad.select_address_id(addressid);
	}


	@Override
	public int deleteByPrimaryKey(Integer addressid) {
		// TODO Auto-generated method stub
		return Uad.deleteByPrimaryKey(addressid);
	}

}
