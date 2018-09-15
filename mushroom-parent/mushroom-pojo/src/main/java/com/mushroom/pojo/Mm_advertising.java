package com.mushroom.pojo;

import java.io.Serializable;
import java.util.Date;

public class Mm_advertising implements Serializable {
    private Integer advertisingId;

    private String advertisingSrc;

    private String title;

    private Integer shopId;

    private Integer commodityDi;

    private Integer stats;

    private Date startTime;

    private Date endTime;

    private String reserve1;

    private String reserve2;

    private String reserve3;

    private String links;

    private static final long serialVersionUID = 1L;

    public Integer getAdvertisingId() {
        return advertisingId;
    }

    public void setAdvertisingId(Integer advertisingId) {
        this.advertisingId = advertisingId;
    }

    public String getAdvertisingSrc() {
        return advertisingSrc;
    }

    public void setAdvertisingSrc(String advertisingSrc) {
        this.advertisingSrc = advertisingSrc == null ? null : advertisingSrc.trim();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public Integer getShopId() {
        return shopId;
    }

    public void setShopId(Integer shopId) {
        this.shopId = shopId;
    }

    public Integer getCommodityDi() {
        return commodityDi;
    }

    public void setCommodityDi(Integer commodityDi) {
        this.commodityDi = commodityDi;
    }

    public Integer getStats() {
        return stats;
    }

    public void setStats(Integer stats) {
        this.stats = stats;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
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

    public String getLinks() {
        return links;
    }

    public void setLinks(String links) {
        this.links = links == null ? null : links.trim();
    }
}