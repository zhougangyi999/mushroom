package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_region;

public interface Mm_regionMapper {
    int deleteByPrimaryKey(Integer regionid);

    int insert(Mm_region record);

    int insertSelective(Mm_region record);

    Mm_region selectByPrimaryKey(Integer regionid);

    int updateByPrimaryKeySelective(Mm_region record);

    int updateByPrimaryKey(Mm_region record);
}