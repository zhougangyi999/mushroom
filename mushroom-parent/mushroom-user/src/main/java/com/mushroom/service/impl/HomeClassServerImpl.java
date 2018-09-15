package com.mushroom.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mushroom.dao.HomeClassDaos;
import com.mushroom.pojo.Mm_category;
import com.mushroom.pojo.Mm_commodity;
import com.mushroom.service.HomeClassServer;

@Service
public class HomeClassServerImpl implements HomeClassServer{

	@Autowired
	private HomeClassDaos hcDao;
	
	@Override
	public List<Mm_category> select_maxcate() {
		// TODO Auto-generated method stub
		return hcDao.select_maxcate();
	}
	
	@Override
	public List<Mm_category> selelct_erjicate(int maxcatid) {
		// TODO Auto-generated method stub
		return hcDao.selelct_erjicate(maxcatid);
	}

	@Override
	public List<Mm_category> selelct_sanjicate(int maxcatid) {
		// TODO Auto-generated method stub
		return hcDao.selelct_sanjicate(maxcatid);
	}

	@Override
	public List<Mm_commodity> selelct_asc_shop() {
		// TODO Auto-generated method stub
		return hcDao.selelct_asc_shop();
	}

}
