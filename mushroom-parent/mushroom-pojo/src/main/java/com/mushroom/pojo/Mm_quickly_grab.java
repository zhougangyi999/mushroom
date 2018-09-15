package com.mushroom.pojo;

import java.io.Serializable;
import java.util.Date;

public class Mm_quickly_grab implements Serializable {
    private Integer quicklyGrabId;

    private Integer qcommodityId;

    private Integer number;

    private Date openWorking;

    private Integer hasSeizedNumber;

    private Double qdiscount;

    private String reserve1;

    private String reserve2;

    private String reserve3;

    private static final long serialVersionUID = 1L;

    public Integer getQuicklyGrabId() {
        return quicklyGrabId;
    }

    public void setQuicklyGrabId(Integer quicklyGrabId) {
        this.quicklyGrabId = quicklyGrabId;
    }

    public Integer getQcommodityId() {
        return qcommodityId;
    }

    public void setQcommodityId(Integer qcommodityId) {
        this.qcommodityId = qcommodityId;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Date getOpenWorking() {
        return openWorking;
    }

    public void setOpenWorking(Date openWorking) {
        this.openWorking = openWorking;
    }

    public Integer getHasSeizedNumber() {
        return hasSeizedNumber;
    }

    public void setHasSeizedNumber(Integer hasSeizedNumber) {
        this.hasSeizedNumber = hasSeizedNumber;
    }

    public Double getQdiscount() {
        return qdiscount;
    }

    public void setQdiscount(Double qdiscount) {
        this.qdiscount = qdiscount;
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

    public String getReserve3() {
        return reserve3;
    }

    public void setReserve3(String reserve3) {
        this.reserve3 = reserve3 == null ? null : reserve3.trim();
    }
}