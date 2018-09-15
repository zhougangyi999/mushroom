package com.mushroom.pojo;

import java.io.Serializable;
import java.util.Date;

public class Mm_discountCoupon implements Serializable {
    private Integer discountcouponid;

    private Date employ;

    private Date expire;

    private Double explains;

    private Integer terrace;

    private String reserved1;

    private String reserved2;

    private static final long serialVersionUID = 1L;

    public Integer getDiscountcouponid() {
        return discountcouponid;
    }

    public void setDiscountcouponid(Integer discountcouponid) {
        this.discountcouponid = discountcouponid;
    }

    public Date getEmploy() {
        return employ;
    }

    public void setEmploy(Date employ) {
        this.employ = employ;
    }

    public Date getExpire() {
        return expire;
    }

    public void setExpire(Date expire) {
        this.expire = expire;
    }

    public Double getExplains() {
        return explains;
    }

    public void setExplains(Double explains) {
        this.explains = explains;
    }

    public Integer getTerrace() {
        return terrace;
    }

    public void setTerrace(Integer terrace) {
        this.terrace = terrace;
    }

    public String getReserved1() {
        return reserved1;
    }

    public void setReserved1(String reserved1) {
        this.reserved1 = reserved1 == null ? null : reserved1.trim();
    }

    public String getReserved2() {
        return reserved2;
    }

    public void setReserved2(String reserved2) {
        this.reserved2 = reserved2 == null ? null : reserved2.trim();
    }
}