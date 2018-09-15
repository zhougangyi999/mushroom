package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_sku;

public interface Mm_skuMapper {
    int deleteByPrimaryKey(Integer skuId);

    int insert(Mm_sku record);

    int insertSelective(Mm_sku record);

    Mm_sku selectByPrimaryKey(Integer skuId);

    int updateByPrimaryKeySelective(Mm_sku record);

    int updateByPrimaryKey(Mm_sku record);
}