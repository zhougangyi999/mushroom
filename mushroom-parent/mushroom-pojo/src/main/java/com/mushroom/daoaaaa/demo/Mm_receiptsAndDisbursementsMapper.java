package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_receiptsAndDisbursements;

public interface Mm_receiptsAndDisbursementsMapper {
    int deleteByPrimaryKey(Integer receiptsanddisbursementsid);

    int insert(Mm_receiptsAndDisbursements record);

    int insertSelective(Mm_receiptsAndDisbursements record);

    Mm_receiptsAndDisbursements selectByPrimaryKey(Integer receiptsanddisbursementsid);

    int updateByPrimaryKeySelective(Mm_receiptsAndDisbursements record);

    int updateByPrimaryKey(Mm_receiptsAndDisbursements record);
}