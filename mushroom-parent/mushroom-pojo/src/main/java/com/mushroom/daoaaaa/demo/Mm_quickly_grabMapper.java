package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_quickly_grab;

public interface Mm_quickly_grabMapper {
    int deleteByPrimaryKey(Integer quicklyGrabId);

    int insert(Mm_quickly_grab record);

    int insertSelective(Mm_quickly_grab record);

    Mm_quickly_grab selectByPrimaryKey(Integer quicklyGrabId);

    int updateByPrimaryKeySelective(Mm_quickly_grab record);

    int updateByPrimaryKey(Mm_quickly_grab record);
}