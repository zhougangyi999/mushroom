package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_discountCoupon;

public interface Mm_discountCouponMapper {
    int deleteByPrimaryKey(Integer discountcouponid);

    int insert(Mm_discountCoupon record);

    int insertSelective(Mm_discountCoupon record);

    Mm_discountCoupon selectByPrimaryKey(Integer discountcouponid);

    int updateByPrimaryKeySelective(Mm_discountCoupon record);

    int updateByPrimaryKey(Mm_discountCoupon record);
}