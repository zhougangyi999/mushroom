package com.mushroom.pojo;

import java.io.Serializable;

public class Mm_shopWithBLOBs extends Mm_shop implements Serializable {
    private String warehousingandlogistice;

    private String licebsesrc;

    private static final long serialVersionUID = 1L;

    public String getWarehousingandlogistice() {
        return warehousingandlogistice;
    }

    public void setWarehousingandlogistice(String warehousingandlogistice) {
        this.warehousingandlogistice = warehousingandlogistice == null ? null : warehousingandlogistice.trim();
    }

    public String getLicebsesrc() {
        return licebsesrc;
    }

    public void setLicebsesrc(String licebsesrc) {
        this.licebsesrc = licebsesrc == null ? null : licebsesrc.trim();
    }
}