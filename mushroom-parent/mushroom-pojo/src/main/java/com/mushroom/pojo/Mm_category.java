package com.mushroom.pojo;

import java.io.Serializable;
import java.util.List;


/**
 * 2018年9月11日17:23:06  zgy新增
 * @author Administrator
 *
 */
public class Mm_category implements Serializable {
    private Integer categoryid;

    private String name;

    private Integer parentid;

    private String reserved1;

    private String reserved2;

    private List<Mm_category> erji_category;//二级
    private List<Mm_category> sanji_category;//三级
    
    public List<Mm_category> getSanji_category() {
		return sanji_category;
	}

	public void setSanji_category(List<Mm_category> sanji_category) {
		this.sanji_category = sanji_category;
	}

	public List<Mm_category> getErji_category() {
		return erji_category;
	}

	public void setErji_category(List<Mm_category> erji_category) {
		this.erji_category = erji_category;
	}

	private static final long serialVersionUID = 1L;

    public Integer getCategoryid() {
        return categoryid;
    }

    public void setCategoryid(Integer categoryid) {
        this.categoryid = categoryid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Integer getParentid() {
        return parentid;
    }

    public void setParentid(Integer parentid) {
        this.parentid = parentid;
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