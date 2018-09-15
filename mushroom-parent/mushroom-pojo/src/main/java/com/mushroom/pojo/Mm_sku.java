package com.mushroom.pojo;

import java.io.Serializable;

public class Mm_sku implements Serializable {
    private Integer skuId;

    private Integer commodityId;

    private String attributeColorValue;

    private String colourSrc;

    private String reserve1;

    private String reserve2;

    private String reserve3;

    private String reserve4;

    private String reserve5;

    private static final long serialVersionUID = 1L;

    public Integer getSkuId() {
        return skuId;
    }

    public void setSkuId(Integer skuId) {
        this.skuId = skuId;
    }

    public Integer getCommodityId() {
        return commodityId;
    }

    public void setCommodityId(Integer commodityId) {
        this.commodityId = commodityId;
    }

    public String getAttributeColorValue() {
        return attributeColorValue;
    }

    public void setAttributeColorValue(String attributeColorValue) {
        this.attributeColorValue = attributeColorValue == null ? null : attributeColorValue.trim();
    }

    public String getColourSrc() {
        return colourSrc;
    }

    public void setColourSrc(String colourSrc) {
        this.colourSrc = colourSrc == null ? null : colourSrc.trim();
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

    public String getReserve4() {
        return reserve4;
    }

    public void setReserve4(String reserve4) {
        this.reserve4 = reserve4 == null ? null : reserve4.trim();
    }

    public String getReserve5() {
        return reserve5;
    }

    public void setReserve5(String reserve5) {
        this.reserve5 = reserve5 == null ? null : reserve5.trim();
    }
}