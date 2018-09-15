package com.mushroom.merchant.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.mushroom.dao.BackstageShopMapper;
import com.mushroom.dao.Mm_ordersMapper;
import com.mushroom.merchant.service.Mm_ordersService;
import com.mushroom.merchant.vo.OrderAllFind;
import com.mushroom.pojo.Mm_orders;

@Service
@Transactional
@AutoConfigureAfter({Mm_ordersMapper.class})
public class Mm_ordersServiceimpl implements Mm_ordersService {

	@Autowired
	private Mm_ordersMapper mos;
	
	@Override
	public List<Map<String, Object>> selectOrderAll(Integer pageNow,OrderAllFind of) {
		List<Map<String, Object>> pageAll = mos.selectOrderAll(of);
		return pageAll;
	}

	@Override
	public Page<Map<String, Object>> selectOrderNum(Integer shopid,Integer pageNow) {
		PageHelper.startPage(pageNow, 4);
		Page<Map<String, Object>> pageAll = (Page<Map<String, Object>>)mos.selectOrderNum(shopid);
		return pageAll;
	}

	@Override
	public List<Map<String, Object>> selectAdd(Integer userid) {
		
		return mos.selectAdd(userid);
	}

	@Override
	public boolean updateByPrimaryKeySelective(Mm_orders mm) {
		if(mos.updateByPrimaryKeySelective(mm)>0){
			if(mos.updateByPrimaryKey(mm.getOrderNum())>0){
				if(mos.updateconsolidated(mm.getOrderNum())>0)
					return true;
			}
				
		}
			
		return false;
	}

}
