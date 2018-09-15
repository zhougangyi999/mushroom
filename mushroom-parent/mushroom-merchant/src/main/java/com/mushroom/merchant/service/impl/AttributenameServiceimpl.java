package com.mushroom.merchant.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mushroom.dao.AttributenameMapper;
import com.mushroom.dao.BackstageShopMapper;
import com.mushroom.merchant.service.AttributenameService;

@Service
@Transactional
@AutoConfigureAfter({AttributenameMapper.class})
public class AttributenameServiceimpl implements AttributenameService {

	@Autowired
	private AttributenameMapper am;
	
	@Override
	public List<Map<String, Object>> findAttribute() {
		
		return am.findAttribute();
	}

}
