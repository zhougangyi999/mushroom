package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_orders;

public interface Mm_ordersMapper {
    int deleteByPrimaryKey(Integer orderid);

    int insert(Mm_orders record);

    int insertSelective(Mm_orders record);

    Mm_orders selectByPrimaryKey(Integer orderid);

    int updateByPrimaryKeySelective(Mm_orders record);

    int updateByPrimaryKeyWithBLOBs(Mm_orders record);

    int updateByPrimaryKey(Mm_orders record);
}