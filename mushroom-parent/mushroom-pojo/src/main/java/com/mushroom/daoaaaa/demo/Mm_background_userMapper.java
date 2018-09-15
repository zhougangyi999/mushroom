package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_background_user;

public interface Mm_background_userMapper {
    int deleteByPrimaryKey(Integer backgroundUser);

    int insert(Mm_background_user record);

    int insertSelective(Mm_background_user record);

    Mm_background_user selectByPrimaryKey(Integer backgroundUser);

    int updateByPrimaryKeySelective(Mm_background_user record);

    int updateByPrimaryKey(Mm_background_user record);
}