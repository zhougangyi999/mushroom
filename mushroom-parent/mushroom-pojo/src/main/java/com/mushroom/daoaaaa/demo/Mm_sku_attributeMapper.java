package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_sku_attribute;

public interface Mm_sku_attributeMapper {
    int deleteByPrimaryKey(Integer skuAttributeId);

    int insert(Mm_sku_attribute record);

    int insertSelective(Mm_sku_attribute record);

    Mm_sku_attribute selectByPrimaryKey(Integer skuAttributeId);

    int updateByPrimaryKeySelective(Mm_sku_attribute record);

    int updateByPrimaryKey(Mm_sku_attribute record);
}