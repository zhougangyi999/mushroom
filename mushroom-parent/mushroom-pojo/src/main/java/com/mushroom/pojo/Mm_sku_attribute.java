package com.mushroom.pojo;

import java.io.Serializable;

public class Mm_sku_attribute implements Serializable {
    private Integer skuAttributeId;

    private Integer skuId;

    private Integer attributeValueValue;

    private Float price;

    private Integer inventory;

    private Integer sales;

    private String reserved1;

    private String reserved2;

    private String reserved3;

    private static final long serialVersionUID = 1L;

    public Integer getSkuAttributeId() {
        return skuAttributeId;
    }

    public void setSkuAttributeId(Integer skuAttributeId) {
        this.skuAttributeId = skuAttributeId;
    }

    public Integer getSkuId() {
        return skuId;
    }

    public void setSkuId(Integer skuId) {
        this.skuId = skuId;
    }

    public Integer getAttributeValueValue() {
        return attributeValueValue;
    }

    public void setAttributeValueValue(Integer attributeValueValue) {
        this.attributeValueValue = attributeValueValue;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Integer getInventory() {
        return inventory;
    }

    public void setInventory(Integer inventory) {
        this.inventory = inventory;
    }

    public Integer getSales() {
        return sales;
    }

    public void setSales(Integer sales) {
        this.sales = sales;
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

    public String getReserved3() {
        return reserved3;
    }

    public void setReserved3(String reserved3) {
        this.reserved3 = reserved3 == null ? null : reserved3.trim();
    }
}