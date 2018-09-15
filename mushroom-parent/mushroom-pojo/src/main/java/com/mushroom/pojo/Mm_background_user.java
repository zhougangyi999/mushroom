package com.mushroom.pojo;

import java.io.Serializable;
import java.util.Date;

public class Mm_background_user implements Serializable {
    private Integer backgroundUser;

    private String name;

    private String backgroundUserName;

    private String password;

    private Integer roleId;

    private Integer stats;

    private String reserve1;

    private String reserve2;

    private Date creationTime;

    private Date updateTime;

    private static final long serialVersionUID = 1L;

    public Integer getBackgroundUser() {
        return backgroundUser;
    }

    public void setBackgroundUser(Integer backgroundUser) {
        this.backgroundUser = backgroundUser;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getBackgroundUserName() {
        return backgroundUserName;
    }

    public void setBackgroundUserName(String backgroundUserName) {
        this.backgroundUserName = backgroundUserName == null ? null : backgroundUserName.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public Integer getStats() {
        return stats;
    }

    public void setStats(Integer stats) {
        this.stats = stats;
    }

    public String getReserve1() {
        return reserve1;
    }

    public void setReserve1(String reserve1) {
        this.reserve1 = reserve1 == null ? null : reserve1.trim();
    }

    public String getReserve2() {
        return reserve2;
    }

    public void setReserve2(String reserve2) {
        this.reserve2 = reserve2 == null ? null : reserve2.trim();
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }
}