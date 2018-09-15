package com.mushroom.pojo;

import java.io.Serializable;

public class Mm_complaintWithBLOBs extends Mm_complaint implements Serializable {
    private String rightsOfReason;

    private byte[] reserve2;

    private static final long serialVersionUID = 1L;

    public String getRightsOfReason() {
        return rightsOfReason;
    }

    public void setRightsOfReason(String rightsOfReason) {
        this.rightsOfReason = rightsOfReason == null ? null : rightsOfReason.trim();
    }

    public byte[] getReserve2() {
        return reserve2;
    }

    public void setReserve2(byte[] reserve2) {
        this.reserve2 = reserve2;
    }
}