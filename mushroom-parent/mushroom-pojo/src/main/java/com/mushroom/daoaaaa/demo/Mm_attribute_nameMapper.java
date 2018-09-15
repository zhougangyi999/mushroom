package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_attribute_name;

public interface Mm_attribute_nameMapper {
    int deleteByPrimaryKey(Integer attributeNameId);

    int insert(Mm_attribute_name record);

    int insertSelective(Mm_attribute_name record);

    Mm_attribute_name selectByPrimaryKey(Integer attributeNameId);

    int updateByPrimaryKeySelective(Mm_attribute_name record);

    int updateByPrimaryKey(Mm_attribute_name record);
}