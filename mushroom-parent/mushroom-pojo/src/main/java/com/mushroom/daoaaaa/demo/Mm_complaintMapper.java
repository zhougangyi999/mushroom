package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_complaint;
import com.mushroom.pojo.Mm_complaintWithBLOBs;

public interface Mm_complaintMapper {
    int deleteByPrimaryKey(Integer complaintId);

    int insert(Mm_complaintWithBLOBs record);

    int insertSelective(Mm_complaintWithBLOBs record);

    Mm_complaintWithBLOBs selectByPrimaryKey(Integer complaintId);

    int updateByPrimaryKeySelective(Mm_complaintWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(Mm_complaintWithBLOBs record);

    int updateByPrimaryKey(Mm_complaint record);
}