package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_consolidated_order;

public interface Mm_consolidated_orderMapper {
    int deleteByPrimaryKey(Integer consolidatedOrderId);

    int insert(Mm_consolidated_order record);

    int insertSelective(Mm_consolidated_order record);

    Mm_consolidated_order selectByPrimaryKey(Integer consolidatedOrderId);

    int updateByPrimaryKeySelective(Mm_consolidated_order record);

    int updateByPrimaryKey(Mm_consolidated_order record);
}