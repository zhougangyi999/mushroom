package com.mushroom.pojo;

import java.io.Serializable;
import java.util.Date;

public class Mm_commodity implements Serializable {
    private Integer commodityId;
    
    private String content;

    private String reserved1;

    private String title;

    private Integer spu;
    private String describes;

    public String getDescribes() {
		return describes;
	}

	public void setDescribes(String describes) {
		this.describes = describes;
	}

	public String getMainImg() {
		return mainImg;
	}

	public void setMainImg(String mainImg) {
		this.mainImg = mainImg;
	}

	private String mainImg;
    private Integer categoryid;

    private Integer categoryid2;

    private Integer categoryid3;

    private Integer userid;

    private Integer comments;

    private Integer regionIdProvince;

    private Integer regionIdCity;

    private Integer shopCategoryId;

    private Float discount;

    private String img1;

    private String img2;

    private String img3;

    private String img4;

    private String img5;

    private String img6;

    private String img7;

    private String img8;

    private String img9;

    private String img10;

    private Integer shopId;

    private Date shopdatetime;

    private Integer shopstatus;

    private Integer shopnum;

    private Float promptPrice;

    public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getReserved1() {
		return reserved1;
	}

	public void setReserved1(String reserved1) {
		this.reserved1 = reserved1;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	private static final long serialVersionUID = 1L;

    public Integer getCommodityId() {
        return commodityId;
    }

    public void setCommodityId(Integer commodityId) {
        this.commodityId = commodityId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public Integer getSpu() {
        return spu;
    }

    public void setSpu(Integer spu) {
        this.spu = spu;
    }

    public Integer getCategoryid() {
        return categoryid;
    }

    public void setCategoryid(Integer categoryid) {
        this.categoryid = categoryid;
    }

    public Integer getCategoryid2() {
        return categoryid2;
    }

    public void setCategoryid2(Integer categoryid2) {
        this.categoryid2 = categoryid2;
    }

    public Integer getCategoryid3() {
        return categoryid3;
    }

    public void setCategoryid3(Integer categoryid3) {
        this.categoryid3 = categoryid3;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getComments() {
        return comments;
    }

    public void setComments(Integer comments) {
        this.comments = comments;
    }

    public Integer getRegionIdProvince() {
        return regionIdProvince;
    }

    public void setRegionIdProvince(Integer regionIdProvince) {
        this.regionIdProvince = regionIdProvince;
    }

    public Integer getRegionIdCity() {
        return regionIdCity;
    }

    public void setRegionIdCity(Integer regionIdCity) {
        this.regionIdCity = regionIdCity;
    }

    public Integer getShopCategoryId() {
        return shopCategoryId;
    }

    public void setShopCategoryId(Integer shopCategoryId) {
        this.shopCategoryId = shopCategoryId;
    }

    public Float getDiscount() {
        return discount;
    }

    public void setDiscount(Float discount) {
        this.discount = discount;
    }

    public String getImg1() {
        return img1;
    }

    public void setImg1(String img1) {
        this.img1 = img1 == null ? null : img1.trim();
    }

    public String getImg2() {
        return img2;
    }

    public void setImg2(String img2) {
        this.img2 = img2 == null ? null : img2.trim();
    }

    public String getImg3() {
        return img3;
    }

    public void setImg3(String img3) {
        this.img3 = img3 == null ? null : img3.trim();
    }

    public String getImg4() {
        return img4;
    }

    public void setImg4(String img4) {
        this.img4 = img4 == null ? null : img4.trim();
    }

    public String getImg5() {
        return img5;
    }

    public void setImg5(String img5) {
        this.img5 = img5 == null ? null : img5.trim();
    }

    public String getImg6() {
        return img6;
    }

    public void setImg6(String img6) {
        this.img6 = img6 == null ? null : img6.trim();
    }

    public String getImg7() {
        return img7;
    }

    public void setImg7(String img7) {
        this.img7 = img7 == null ? null : img7.trim();
    }

    public String getImg8() {
        return img8;
    }

    public void setImg8(String img8) {
        this.img8 = img8 == null ? null : img8.trim();
    }

    public String getImg9() {
        return img9;
    }

    public void setImg9(String img9) {
        this.img9 = img9 == null ? null : img9.trim();
    }

    public String getImg10() {
        return img10;
    }

    public void setImg10(String img10) {
        this.img10 = img10 == null ? null : img10.trim();
    }

    public Integer getShopId() {
        return shopId;
    }

    public void setShopId(Integer shopId) {
        this.shopId = shopId;
    }

    public Date getShopdatetime() {
        return shopdatetime;
    }

    public void setShopdatetime(Date shopdatetime) {
        this.shopdatetime = shopdatetime;
    }

    public Integer getShopstatus() {
        return shopstatus;
    }

    public void setShopstatus(Integer shopstatus) {
        this.shopstatus = shopstatus;
    }

    public Integer getShopnum() {
        return shopnum;
    }

    public void setShopnum(Integer shopnum) {
        this.shopnum = shopnum;
    }

    public Float getPromptPrice() {
        return promptPrice;
    }

    public void setPromptPrice(Float promptPrice) {
        this.promptPrice = promptPrice;
    }
}