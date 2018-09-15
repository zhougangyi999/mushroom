package com.mushroom.pojo;

import java.io.Serializable;

public class Mm_custom_classify implements Serializable {
    private Integer customClassifyId;

    private String name;

    private Integer shopId;

    private String reserve1;

    private String reserve2;

    private static final long serialVersionUID = 1L;

    public Integer getCustomClassifyId() {
        return customClassifyId;
    }

    public void setCustomClassifyId(Integer customClassifyId) {
        this.customClassifyId = customClassifyId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
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

    public String getReserve2() {
        return reserve2;
    }

    public void setReserve2(String reserve2) {
        this.reserve2 = reserve2 == null ? null : reserve2.trim();
    }
}