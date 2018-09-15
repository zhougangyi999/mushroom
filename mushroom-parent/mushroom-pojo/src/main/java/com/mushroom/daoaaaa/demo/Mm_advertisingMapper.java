package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_advertising;

public interface Mm_advertisingMapper {
    int deleteByPrimaryKey(Integer advertisingId);

    int insert(Mm_advertising record);

    int insertSelective(Mm_advertising record);

    Mm_advertising selectByPrimaryKey(Integer advertisingId);

    int updateByPrimaryKeySelective(Mm_advertising record);

    int updateByPrimaryKeyWithBLOBs(Mm_advertising record);

    int updateByPrimaryKey(Mm_advertising record);
}