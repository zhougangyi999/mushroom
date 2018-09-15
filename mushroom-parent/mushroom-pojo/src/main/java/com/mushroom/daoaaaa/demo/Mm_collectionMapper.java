package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_collection;

public interface Mm_collectionMapper {
    int deleteByPrimaryKey(Integer collectionid);

    int insert(Mm_collection record);

    int insertSelective(Mm_collection record);

    Mm_collection selectByPrimaryKey(Integer collectionid);

    int updateByPrimaryKeySelective(Mm_collection record);

    int updateByPrimaryKey(Mm_collection record);
}