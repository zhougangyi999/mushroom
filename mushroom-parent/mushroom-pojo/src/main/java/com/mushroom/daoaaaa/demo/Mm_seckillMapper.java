package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_seckill;

public interface Mm_seckillMapper {
    int deleteByPrimaryKey(Integer seckillId);

    int insert(Mm_seckill record);

    int insertSelective(Mm_seckill record);

    Mm_seckill selectByPrimaryKey(Integer seckillId);

    int updateByPrimaryKeySelective(Mm_seckill record);

    int updateByPrimaryKeyWithBLOBs(Mm_seckill record);

    int updateByPrimaryKey(Mm_seckill record);
}