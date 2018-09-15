package com.mushroom.daoaaaa.demo;

import com.mushroom.pojo.Mm_permissions_have;

public interface Mm_permissions_haveMapper {
    int deleteByPrimaryKey(Integer permissionsHave);

    int insert(Mm_permissions_have record);

    int insertSelective(Mm_permissions_have record);

    Mm_permissions_have selectByPrimaryKey(Integer permissionsHave);

    int updateByPrimaryKeySelective(Mm_permissions_have record);

    int updateByPrimaryKey(Mm_permissions_have record);
}