package com.mushroom.merchant.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.mushroom.dao.MmcommodityMapper;
import com.mushroom.merchant.service.MmcommodityService;
import com.mushroom.merchant.vo.MerUtilVo;
import com.mushroom.pojo.Mm_commodity;
import com.mushroom.pojo.Mm_commodity_attribute;
@Service
@Transactional
@AutoConfigureAfter({MmcommodityMapper.class})
public class MmcommodityServiceimpl implements MmcommodityService {
	
	@Autowired
	private MmcommodityMapper mcs;

	@Override
	public Page<Map<String, Object>> findCommodity(MerUtilVo me, Integer pageNow) {
		PageHelper.startPage(pageNow, 4);
		Page<Map<String, Object>> pageAll = (Page<Map<String, Object>>) mcs.selectCommodity(me);
		return pageAll;
	}

	@Override
	public List<Map<String, Object>> selectCategory() {
		
		return mcs.selectCategory();
	}

	@Override
	public boolean saveCom(Mm_commodity mc,Mm_commodity_attribute nc) {
		if(mcs.insert(mc)>0){
			nc.setCommodityId(mc.getCommodityId());
			System.out.println(nc.getCommodityAttributeId()+"="+nc.getCommodityNameD()+"-"+nc.getCommodityId()+"-"+mcs.selectMaxid());
			if (mcs.insertArtter(nc)>0) 
				return true;
		}
			
			
		return false;
	}

	@Override
	public boolean comdityDel(String [] arr) {
		for (int i = 0; i < arr.length; i++) {
			if(mcs.comdityDel(Integer.valueOf(arr[i]))<1){
				throw new RuntimeException();
				
			}				
		}
		return true;
	}

	@Override
	public boolean updateByPrimaryKey(Integer shopstatus, String [] arr) {
		for (int i = 0; i < arr.length; i++) {
			if(mcs.updateByPrimaryKey(shopstatus,(Integer.valueOf(arr[i])))<1){
				throw new RuntimeException();
				
			}				
		}
		return true;
	}

	



}
