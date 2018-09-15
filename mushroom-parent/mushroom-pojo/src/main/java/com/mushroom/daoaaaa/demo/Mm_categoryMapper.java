package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_category;

public interface Mm_categoryMapper {
    int deleteByPrimaryKey(Integer categoryid);

    int insert(Mm_category record);

    int insertSelective(Mm_category record);

    Mm_category selectByPrimaryKey(Integer categoryid);

    int updateByPrimaryKeySelective(Mm_category record);

    int updateByPrimaryKey(Mm_category record);
}