package com.mushroom.pojo;

import java.io.Serializable;

public class Mm_attribute_name implements Serializable {
    private Integer attributeNameId;

    private String attributeValue;

    private Integer parentId;

    private String reserved1;

    private String reserved2;

    private static final long serialVersionUID = 1L;

    public Integer getAttributeNameId() {
        return attributeNameId;
    }

    public void setAttributeNameId(Integer attributeNameId) {
        this.attributeNameId = attributeNameId;
    }

    public String getAttributeValue() {
        return attributeValue;
    }

    public void setAttributeValue(String attributeValue) {
        this.attributeValue = attributeValue == null ? null : attributeValue.trim();
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
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