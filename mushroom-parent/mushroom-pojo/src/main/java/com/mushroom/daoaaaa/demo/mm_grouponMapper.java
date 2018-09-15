package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.mm_groupon;

public interface mm_grouponMapper {
    int deleteByPrimaryKey(Integer grouponId);

    int insert(mm_groupon record);

    int insertSelective(mm_groupon record);

    mm_groupon selectByPrimaryKey(Integer grouponId);

    int updateByPrimaryKeySelective(mm_groupon record);

    int updateByPrimaryKey(mm_groupon record);
}