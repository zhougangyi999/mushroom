package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_payment;

public interface Mm_paymentMapper {
    int deleteByPrimaryKey(Integer paymentId);

    int insert(Mm_payment record);

    int insertSelective(Mm_payment record);

    Mm_payment selectByPrimaryKey(Integer paymentId);

    int updateByPrimaryKeySelective(Mm_payment record);

    int updateByPrimaryKey(Mm_payment record);
}