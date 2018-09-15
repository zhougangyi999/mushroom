package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_role;

public interface Mm_roleMapper {
    int deleteByPrimaryKey(Integer roleId);

    int insert(Mm_role record);

    int insertSelective(Mm_role record);

    Mm_role selectByPrimaryKey(Integer roleId);

    int updateByPrimaryKeySelective(Mm_role record);

    int updateByPrimaryKey(Mm_role record);
}