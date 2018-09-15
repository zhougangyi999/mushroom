package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_commodity_attribute;

public interface Mm_commodity_attributeMapper {
    int deleteByPrimaryKey(Integer commodityAttributeId);

    int insert(Mm_commodity_attribute record);

    int insertSelective(Mm_commodity_attribute record);

    Mm_commodity_attribute selectByPrimaryKey(Integer commodityAttributeId);

    int updateByPrimaryKeySelective(Mm_commodity_attribute record);

    int updateByPrimaryKey(Mm_commodity_attribute record);
}