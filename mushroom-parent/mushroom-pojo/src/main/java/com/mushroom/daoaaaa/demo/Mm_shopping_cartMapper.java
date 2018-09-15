package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_shopping_cart;

public interface Mm_shopping_cartMapper {
    int deleteByPrimaryKey(Integer shoppingVartId);

    int insert(Mm_shopping_cart record);

    int insertSelective(Mm_shopping_cart record);

    Mm_shopping_cart selectByPrimaryKey(Integer shoppingVartId);

    int updateByPrimaryKeySelective(Mm_shopping_cart record);

    int updateByPrimaryKey(Mm_shopping_cart record);
}