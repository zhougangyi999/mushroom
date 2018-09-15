package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_commodity;
import com.mushroom.pojo.Mm_commodityWithBLOBs;

public interface Mm_commodityMapper {
    int deleteByPrimaryKey(Integer commodityId);

    int insert(Mm_commodityWithBLOBs record);

    int insertSelective(Mm_commodityWithBLOBs record);

    Mm_commodityWithBLOBs selectByPrimaryKey(Integer commodityId);

    int updateByPrimaryKeySelective(Mm_commodityWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(Mm_commodityWithBLOBs record);

    int updateByPrimaryKey(Mm_commodity record);
}