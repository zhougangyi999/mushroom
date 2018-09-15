package com.mushroom.merchant.vo;

import java.io.Serializable;

public class MerUtilVo implements Serializable{
	
	private Integer shopId;
	private String product_name;
	private String outId;
	private Integer category;
	private double startPrice;
	private double endPrice;
	private Integer startNum;
	private Integer endNum;
	private Integer status;
	private Integer itemStepAudit;
	private Integer shopstatus;
	public MerUtilVo(Integer shopId, String product_name, String outId, Integer category, double startPrice,
			double endPrice, Integer startNum, Integer endNum, Integer status, Integer itemStepAudit,
			Integer shopstatus) {
		super();
		this.shopId = shopId;
		this.product_name = product_name;
		this.outId = outId;
		this.category = category;
		this.startPrice = startPrice;
		this.endPrice = endPrice;
		this.startNum = startNum;
		this.endNum = endNum;
		this.status = status;
		this.itemStepAudit = itemStepAudit;
		this.shopstatus = shopstatus;
	}
	public Integer getShopId() {
		return shopId;
	}
	public void setShopId(Integer shopId) {
		this.shopId = shopId;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public String getOutId() {
		return outId;
	}
	public void setOutId(String outId) {
		this.outId = outId;
	}
	public Integer getCategory() {
		return category;
	}
	public void setCategory(Integer category) {
		this.category = category;
	}
	public double getStartPrice() {
		return startPrice;
	}
	public void setStartPrice(double startPrice) {
		this.startPrice = startPrice;
	}
	public double getEndPrice() {
		return endPrice;
	}
	public void setEndPrice(double endPrice) {
		this.endPrice = endPrice;
	}
	public Integer getStartNum() {
		return startNum;
	}
	public void setStartNum(Integer startNum) {
		this.startNum = startNum;
	}
	public Integer getEndNum() {
		return endNum;
	}
	public void setEndNum(Integer endNum) {
		this.endNum = endNum;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public Integer getItemStepAudit() {
		return itemStepAudit;
	}
	public void setItemStepAudit(Integer itemStepAudit) {
		this.itemStepAudit = itemStepAudit;
	}
	public Integer getShopstatus() {
		return shopstatus;
	}
	public void setShopstatus(Integer shopstatus) {
		this.shopstatus = shopstatus;
	}
	public MerUtilVo() {
		super();
	}
	
	
	

}
