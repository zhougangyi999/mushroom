package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_custom_classify;

public interface Mm_custom_classifyMapper {
    int deleteByPrimaryKey(Integer customClassifyId);

    int insert(Mm_custom_classify record);

    int insertSelective(Mm_custom_classify record);

    Mm_custom_classify selectByPrimaryKey(Integer customClassifyId);

    int updateByPrimaryKeySelective(Mm_custom_classify record);

    int updateByPrimaryKey(Mm_custom_classify record);
}