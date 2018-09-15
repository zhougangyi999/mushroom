package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_order_item;

public interface Mm_order_itemMapper {
    int deleteByPrimaryKey(Integer orderItemId);

    int insert(Mm_order_item record);

    int insertSelective(Mm_order_item record);

    Mm_order_item selectByPrimaryKey(Integer orderItemId);

    int updateByPrimaryKeySelective(Mm_order_item record);

    int updateByPrimaryKey(Mm_order_item record);
}