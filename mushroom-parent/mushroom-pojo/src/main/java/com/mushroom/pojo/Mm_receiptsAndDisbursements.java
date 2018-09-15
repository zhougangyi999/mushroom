package com.mushroom.pojo;

import java.io.Serializable;
import java.util.Date;

public class Mm_receiptsAndDisbursements implements Serializable {
    private Integer receiptsanddisbursementsid;

    private Date creationtime;

    private Integer types;

    private Double money;

    private Integer userid;

    private Double balance;

    private String reserved1;

    private String reserved2;

    private static final long serialVersionUID = 1L;

    public Integer getReceiptsanddisbursementsid() {
        return receiptsanddisbursementsid;
    }

    public void setReceiptsanddisbursementsid(Integer receiptsanddisbursementsid) {
        this.receiptsanddisbursementsid = receiptsanddisbursementsid;
    }

    public Date getCreationtime() {
        return creationtime;
    }

    public void setCreationtime(Date creationtime) {
        this.creationtime = creationtime;
    }

    public Integer getTypes() {
        return types;
    }

    public void setTypes(Integer types) {
        this.types = types;
    }

    public Double getMoney() {
        return money;
    }

    public void setMoney(Double money) {
        this.money = money;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
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