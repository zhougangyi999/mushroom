package com.mushroom.pojo;

import java.io.Serializable;
import java.util.Date;

public class Mm_consolidated_order implements Serializable {
    private Integer consolidatedOrderId;

    private String orderNum;

    private Date creationTime;

    private Double total;

    private Integer uid;

    private Integer stats;

    private String reserve1;

    private String reserve2;

    private static final long serialVersionUID = 1L;

    public Integer getConsolidatedOrderId() {
        return consolidatedOrderId;
    }

    public void setConsolidatedOrderId(Integer consolidatedOrderId) {
        this.consolidatedOrderId = consolidatedOrderId;
    }

    public String getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(String orderNum) {
        this.orderNum = orderNum == null ? null : orderNum.trim();
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public Integer getStats() {
        return stats;
    }

    public void setStats(Integer stats) {
        this.stats = stats;
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