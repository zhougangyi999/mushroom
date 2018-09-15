package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_service_evaluation;

public interface Mm_service_evaluationMapper {
    int deleteByPrimaryKey(Integer serviceEvaluationId);

    int insert(Mm_service_evaluation record);

    int insertSelective(Mm_service_evaluation record);

    Mm_service_evaluation selectByPrimaryKey(Integer serviceEvaluationId);

    int updateByPrimaryKeySelective(Mm_service_evaluation record);

    int updateByPrimaryKey(Mm_service_evaluation record);
}