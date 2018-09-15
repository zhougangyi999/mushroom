package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_transactionRecord;

public interface Mm_transactionRecordMapper {
    int deleteByPrimaryKey(Integer transactionRecordid);

    int insert(Mm_transactionRecord record);

    int insertSelective(Mm_transactionRecord record);

    Mm_transactionRecord selectByPrimaryKey(Integer transactionRecordid);

    int updateByPrimaryKeySelective(Mm_transactionRecord record);

    int updateByPrimaryKey(Mm_transactionRecord record);
}