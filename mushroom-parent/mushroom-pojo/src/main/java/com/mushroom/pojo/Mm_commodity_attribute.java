package com.mushroom.pojo;

import java.io.Serializable;

public class Mm_commodity_attribute implements Serializable {
    private Integer commodityAttributeId;

    private Integer commodityNameD;

    private Integer attributeValueId;

    private Integer commodityId;

    private String reserved1;

    private String reserved2;

    private static final long serialVersionUID = 1L;

    public Integer getCommodityAttributeId() {
        return commodityAttributeId;
    }

    public void setCommodityAttributeId(Integer commodityAttributeId) {
        this.commodityAttributeId = commodityAttributeId;
    }

    public Integer getCommodityNameD() {
        return commodityNameD;
    }

    public void setCommodityNameD(Integer commodityNameD) {
        this.commodityNameD = commodityNameD;
    }

    public Integer getAttributeValueId() {
        return attributeValueId;
    }

    public void setAttributeValueId(Integer attributeValueId) {
        this.attributeValueId = attributeValueId;
    }

    public Integer getCommodityId() {
        return commodityId;
    }

    public void setCommodityId(Integer commodityId) {
        this.commodityId = commodityId;
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