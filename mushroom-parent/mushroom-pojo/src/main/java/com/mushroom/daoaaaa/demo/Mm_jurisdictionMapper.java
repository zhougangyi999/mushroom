package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_jurisdiction;

public interface Mm_jurisdictionMapper {
    int deleteByPrimaryKey(Integer jurisdictionId);

    int insert(Mm_jurisdiction record);

    int insertSelective(Mm_jurisdiction record);

    Mm_jurisdiction selectByPrimaryKey(Integer jurisdictionId);

    int updateByPrimaryKeySelective(Mm_jurisdiction record);

    int updateByPrimaryKey(Mm_jurisdiction record);
}