package com.mushroom.pojo;

import java.io.Serializable;
import java.util.Date;

public class Mm_orders implements Serializable {
    private Integer orderid;

    private String orderNumParent;

    private String orderNum;

    private Date dealTime;

    private Double total;

    private Double mergePrice;

    private Integer status;

    private Integer userid;

    private String consignee;

    private String regionIdProvince;

    private String regionIdCity;

    private String regionIdCounty;

    private String address;

    private String verificationCode;

    private String phone;

    private Double freight;

    private Integer storeTheUser;

    private Integer shopid;

    private String emitDaddress;

    private Integer emitIdProvince;

    private Integer emitIdCity;

    private Integer emitIdCounty;

    private Integer emitConsignee;

    private String emitCode;

    private Date payDate;

    private Date deliveryTime;

    private Date notarizeTime;

    private String trackingNumber;

    private String logisticsCompany;

    private Date evaluateTime;

    private Integer cancel;

    private String emitPhone;

    private String reserved1;

    private String reserved2;

    private String reserved3;

    private String remark;

    private static final long serialVersionUID = 1L;

    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public String getOrderNumParent() {
        return orderNumParent;
    }

    public void setOrderNumParent(String orderNumParent) {
        this.orderNumParent = orderNumParent == null ? null : orderNumParent.trim();
    }

    public String getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(String orderNum) {
        this.orderNum = orderNum == null ? null : orderNum.trim();
    }

    public Date getDealTime() {
        return dealTime;
    }

    public void setDealTime(Date dealTime) {
        this.dealTime = dealTime;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public Double getMergePrice() {
        return mergePrice;
    }

    public void setMergePrice(Double mergePrice) {
        this.mergePrice = mergePrice;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getConsignee() {
        return consignee;
    }

    public void setConsignee(String consignee) {
        this.consignee = consignee == null ? null : consignee.trim();
    }

    public String getRegionIdProvince() {
        return regionIdProvince;
    }

    public void setRegionIdProvince(String regionIdProvince) {
        this.regionIdProvince = regionIdProvince == null ? null : regionIdProvince.trim();
    }

    public String getRegionIdCity() {
        return regionIdCity;
    }

    public void setRegionIdCity(String regionIdCity) {
        this.regionIdCity = regionIdCity == null ? null : regionIdCity.trim();
    }

    public String getRegionIdCounty() {
        return regionIdCounty;
    }

    public void setRegionIdCounty(String regionIdCounty) {
        this.regionIdCounty = regionIdCounty == null ? null : regionIdCounty.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getVerificationCode() {
        return verificationCode;
    }

    public void setVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode == null ? null : verificationCode.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public Double getFreight() {
        return freight;
    }

    public void setFreight(Double freight) {
        this.freight = freight;
    }

    public Integer getStoreTheUser() {
        return storeTheUser;
    }

    public void setStoreTheUser(Integer storeTheUser) {
        this.storeTheUser = storeTheUser;
    }

    public Integer getShopid() {
        return shopid;
    }

    public void setShopid(Integer shopid) {
        this.shopid = shopid;
    }

    public String getEmitDaddress() {
        return emitDaddress;
    }

    public void setEmitDaddress(String emitDaddress) {
        this.emitDaddress = emitDaddress == null ? null : emitDaddress.trim();
    }

    public Integer getEmitIdProvince() {
        return emitIdProvince;
    }

    public void setEmitIdProvince(Integer emitIdProvince) {
        this.emitIdProvince = emitIdProvince;
    }

    public Integer getEmitIdCity() {
        return emitIdCity;
    }

    public void setEmitIdCity(Integer emitIdCity) {
        this.emitIdCity = emitIdCity;
    }

    public Integer getEmitIdCounty() {
        return emitIdCounty;
    }

    public void setEmitIdCounty(Integer emitIdCounty) {
        this.emitIdCounty = emitIdCounty;
    }

    public Integer getEmitConsignee() {
        return emitConsignee;
    }

    public void setEmitConsignee(Integer emitConsignee) {
        this.emitConsignee = emitConsignee;
    }

    public String getEmitCode() {
        return emitCode;
    }

    public void setEmitCode(String emitCode) {
        this.emitCode = emitCode == null ? null : emitCode.trim();
    }

    public Date getPayDate() {
        return payDate;
    }

    public void setPayDate(Date payDate) {
        this.payDate = payDate;
    }

    public Date getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(Date deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public Date getNotarizeTime() {
        return notarizeTime;
    }

    public void setNotarizeTime(Date notarizeTime) {
        this.notarizeTime = notarizeTime;
    }

    public String getTrackingNumber() {
        return trackingNumber;
    }

    public void setTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber == null ? null : trackingNumber.trim();
    }

    public String getLogisticsCompany() {
        return logisticsCompany;
    }

    public void setLogisticsCompany(String logisticsCompany) {
        this.logisticsCompany = logisticsCompany == null ? null : logisticsCompany.trim();
    }

    public Date getEvaluateTime() {
        return evaluateTime;
    }

    public void setEvaluateTime(Date evaluateTime) {
        this.evaluateTime = evaluateTime;
    }

    public Integer getCancel() {
        return cancel;
    }

    public void setCancel(Integer cancel) {
        this.cancel = cancel;
    }

    public String getEmitPhone() {
        return emitPhone;
    }

    public void setEmitPhone(String emitPhone) {
        this.emitPhone = emitPhone == null ? null : emitPhone.trim();
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

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }
}