package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_shop;
import com.mushroom.pojo.Mm_shopWithBLOBs;

public interface Mm_shopMapper {
    int deleteByPrimaryKey(Integer shopid);

    int insert(Mm_shopWithBLOBs record);

    int insertSelective(Mm_shopWithBLOBs record);

    Mm_shopWithBLOBs selectByPrimaryKey(Integer shopid);

    int updateByPrimaryKeySelective(Mm_shopWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(Mm_shopWithBLOBs record);

    int updateByPrimaryKey(Mm_shop record);
}