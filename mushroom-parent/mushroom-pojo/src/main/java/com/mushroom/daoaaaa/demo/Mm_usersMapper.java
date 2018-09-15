package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_users;

public interface Mm_usersMapper {
    int deleteByPrimaryKey(Integer uid);

    int insert(Mm_users record);

    int insertSelective(Mm_users record);

    Mm_users selectByPrimaryKey(Integer uid);

    int updateByPrimaryKeySelective(Mm_users record);

    int updateByPrimaryKeyWithBLOBs(Mm_users record);

    int updateByPrimaryKey(Mm_users record);
}