package com.mushroom.pojo;

import java.io.Serializable;

public class Mm_payment implements Serializable {
    private Integer paymentId;

    private Integer useridOut;

    private Integer useridInt;

    private Double money;

    private String orderItemNum;

    private String reserved1;

    private String reserved2;

    private String reserved3;

    private static final long serialVersionUID = 1L;

    public Integer getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(Integer paymentId) {
        this.paymentId = paymentId;
    }

    public Integer getUseridOut() {
        return useridOut;
    }

    public void setUseridOut(Integer useridOut) {
        this.useridOut = useridOut;
    }

    public Integer getUseridInt() {
        return useridInt;
    }

    public void setUseridInt(Integer useridInt) {
        this.useridInt = useridInt;
    }

    public Double getMoney() {
        return money;
    }

    public void setMoney(Double money) {
        this.money = money;
    }

    public String getOrderItemNum() {
        return orderItemNum;
    }

    public void setOrderItemNum(String orderItemNum) {
        this.orderItemNum = orderItemNum == null ? null : orderItemNum.trim();
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

    public String getReserved3() {
        return reserved3;
    }

    public void setReserved3(String reserved3) {
        this.reserved3 = reserved3 == null ? null : reserved3.trim();
    }
}