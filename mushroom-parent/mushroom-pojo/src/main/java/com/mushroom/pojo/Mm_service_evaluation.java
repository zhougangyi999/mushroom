package com.mushroom.pojo;

import java.io.Serializable;

public class Mm_service_evaluation implements Serializable {
    private Integer serviceEvaluationId;

    private Double describes;

    private Double graded;

    private Double quality;

    private Integer userid;

    private String location;

    private Integer shopid;

    private String reserve1;

    private String reserve2;

    private static final long serialVersionUID = 1L;

    public Integer getServiceEvaluationId() {
        return serviceEvaluationId;
    }

    public void setServiceEvaluationId(Integer serviceEvaluationId) {
        this.serviceEvaluationId = serviceEvaluationId;
    }

    public Double getDescribes() {
        return describes;
    }

    public void setDescribes(Double describes) {
        this.describes = describes;
    }

    public Double getGraded() {
        return graded;
    }

    public void setGraded(Double graded) {
        this.graded = graded;
    }

    public Double getQuality() {
        return quality;
    }

    public void setQuality(Double quality) {
        this.quality = quality;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location == null ? null : location.trim();
    }

    public Integer getShopid() {
        return shopid;
    }

    public void setShopid(Integer shopid) {
        this.shopid = shopid;
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
}