package com.mushroom.merchant.service.impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mushroom.dao.BackstageShopMapper;
import com.mushroom.merchant.service.BackstageShopService;
import com.mushroom.pojo.Mm_shop;

@Service
@Transactional
@AutoConfigureAfter({BackstageShopMapper.class})
public class BackstageShopServiceimpl implements BackstageShopService {
	@Autowired
	private BackstageShopMapper backstageShopMapper;
	
	
	@Override
	public Map<String, Object> selectByPrimaryKey(Integer shopId) {
		return backstageShopMapper.selectByPrimaryKey(shopId);
	}


	@Override
	public Mm_shop selectShop(Integer userid) {
		return backstageShopMapper.selectShop(userid);
	}


	@Override
	public String userStatic(Integer userid) {
		
		return backstageShopMapper.userStatic(userid);
	}


	@Override
	public boolean insertShops(Mm_shop ms) {
		if(backstageShopMapper.insertShops(ms)>0)
			return true;
		return false;
	}
	
	
}
