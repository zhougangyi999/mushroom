package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_comment;
import com.mushroom.pojo.Mm_commentWithBLOBs;

public interface Mm_commentMapper {
    int deleteByPrimaryKey(Integer commentId);

    int insert(Mm_commentWithBLOBs record);

    int insertSelective(Mm_commentWithBLOBs record);

    Mm_commentWithBLOBs selectByPrimaryKey(Integer commentId);

    int updateByPrimaryKeySelective(Mm_commentWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(Mm_commentWithBLOBs record);

    int updateByPrimaryKey(Mm_comment record);
}