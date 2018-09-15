package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_attribute_value;

public interface Mm_attribute_valueMapper {
    int deleteByPrimaryKey(Integer attributeValueId);

    int insert(Mm_attribute_value record);

    int insertSelective(Mm_attribute_value record);

    Mm_attribute_value selectByPrimaryKey(Integer attributeValueId);

    int updateByPrimaryKeySelective(Mm_attribute_value record);

    int updateByPrimaryKey(Mm_attribute_value record);
}