package com.mushroom.pojo;

import java.io.Serializable;

public class Mm_commodityWithBLOBs extends Mm_commodity implements Serializable {
    private String describes;

    private String mainImg;

    private static final long serialVersionUID = 1L;

    public String getDescribes() {
        return describes;
    }

    public void setDescribes(String describes) {
        this.describes = describes == null ? null : describes.trim();
    }

    public String getMainImg() {
        return mainImg;
    }

    public void setMainImg(String mainImg) {
        this.mainImg = mainImg == null ? null : mainImg.trim();
    }
}