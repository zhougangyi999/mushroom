package com.mushroom.pojo;

import java.io.Serializable;

public class Mm_commentWithBLOBs extends Mm_comment implements Serializable {
    private String content;

    private String reserved1;

    private static final long serialVersionUID = 1L;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public String getReserved1() {
        return reserved1;
    }

    public void setReserved1(String reserved1) {
        this.reserved1 = reserved1 == null ? null : reserved1.trim();
    }
}