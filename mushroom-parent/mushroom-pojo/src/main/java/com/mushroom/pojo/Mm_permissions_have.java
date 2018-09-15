package com.mushroom.pojo;

import java.io.Serializable;

public class Mm_permissions_have implements Serializable {
	//权限拥有表id
    private Integer permissionsHave;
    //角色id
    private Integer roleId;
//权限id
    private Integer permissionsId;
//预留字段1
    private String reserve1;

    private static final long serialVersionUID = 1L;

    public Integer getPermissionsHave() {
        return permissionsHave;
    }

    public void setPermissionsHave(Integer permissionsHave) {
        this.permissionsHave = permissionsHave;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public Integer getPermissionsId() {
        return permissionsId;
    }

    public void setPermissionsId(Integer permissionsId) {
        this.permissionsId = permissionsId;
    }

    public String getReserve1() {
        return reserve1;
    }

    public void setReserve1(String reserve1) {
        this.reserve1 = reserve1 == null ? null : reserve1.trim();
    }
}