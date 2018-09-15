package com.mushroom.pojo;

import java.io.Serializable;
import java.util.Date;

public class Mm_complaint implements Serializable {
    private Integer complaintId;

    private Date creationTime;

    private String nickname;

    private Integer uid;

    private Integer status;

    private String orderNum;

    private Integer complaintsReasons;

    private Integer shopId;

    private String reserve1;

    private static final long serialVersionUID = 1L;

    public Integer getComplaintId() {
        return complaintId;
    }

    public void setComplaintId(Integer complaintId) {
        this.complaintId = complaintId;
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname == null ? null : nickname.trim();
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(String orderNum) {
        this.orderNum = orderNum == null ? null : orderNum.trim();
    }

    public Integer getComplaintsReasons() {
        return complaintsReasons;
    }

    public void setComplaintsReasons(Integer complaintsReasons) {
        this.complaintsReasons = complaintsReasons;
    }

    public Integer getShopId() {
        return shopId;
    }

    public void setShopId(Integer shopId) {
        this.shopId = shopId;
    }

    public String getReserve1() {
        return reserve1;
    }

    public void setReserve1(String reserve1) {
        this.reserve1 = reserve1 == null ? null : reserve1.trim();
    }
}