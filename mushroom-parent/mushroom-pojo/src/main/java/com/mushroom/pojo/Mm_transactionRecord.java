package com.mushroom.pojo;

import java.io.Serializable;
import java.util.Date;

public class Mm_transactionRecord implements Serializable {
    private Integer transactionRecordid;

    private Date creationTime;

    private Double money;

    private String capitalSource;

    private String whereaboutsOfFund;

    private String name;

    private String orderNum;

    private Integer types;

    private Integer status;

    private String remark;

    private Integer userid;

    private String reserved1;

    private String reserved2;

    private static final long serialVersionUID = 1L;

    public Integer getTransactionRecordid() {
        return transactionRecordid;
    }

    public void setTransactionRecordid(Integer transactionRecordid) {
        this.transactionRecordid = transactionRecordid;
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }

    public Double getMoney() {
        return money;
    }

    public void setMoney(Double money) {
        this.money = money;
    }

    public String getCapitalSource() {
        return capitalSource;
    }

    public void setCapitalSource(String capitalSource) {
        this.capitalSource = capitalSource == null ? null : capitalSource.trim();
    }

    public String getWhereaboutsOfFund() {
        return whereaboutsOfFund;
    }

    public void setWhereaboutsOfFund(String whereaboutsOfFund) {
        this.whereaboutsOfFund = whereaboutsOfFund == null ? null : whereaboutsOfFund.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(String orderNum) {
        this.orderNum = orderNum == null ? null : orderNum.trim();
    }

    public Integer getTypes() {
        return types;
    }

    public void setTypes(Integer types) {
        this.types = types;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
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