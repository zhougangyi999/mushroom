package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_address;

public interface Mm_addressMapper {
    int deleteByPrimaryKey(Integer addressid);

    int insert(Mm_address record);

    int insertSelective(Mm_address record);

    Mm_address selectByPrimaryKey(Integer addressid);

    int updateByPrimaryKeySelective(Mm_address record);

    int updateByPrimaryKey(Mm_address record);
}