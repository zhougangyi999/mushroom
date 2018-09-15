package com.mushroom.merchant.vo;

import java.io.Serializable;

public class OrderAllFind implements Serializable{
	private Integer shopid;
	private String ordernums;
	public String getOrdernums() {
		return ordernums;
	}
	public void setOrdernums(String ordernums) {
		this.ordernums = ordernums;
	}
	private String startPrice;
	private String endPrice;
	private String otitle;
	private String ordernum;
	private String ouname;
	private Integer status;
	public Integer getShopid() {
		return shopid;
	}
	public void setShopid(Integer shopid) {
		this.shopid = shopid;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public OrderAllFind(Integer shopId, String startPrice, String endPrice, String otitle, String ordernum,
			String ouname) {
		super();
		this.shopid = shopId;
		this.startPrice = startPrice;
		this.endPrice = endPrice;
		this.otitle = otitle;
		this.ordernum = ordernum;
		this.ouname = ouname;
	}

	public String getStartPrice() {
		return startPrice;
	}
	public void setStartPrice(String startPrice) {
		this.startPrice = startPrice;
	}
	public String getEndPrice() {
		return endPrice;
	}
	public void setEndPrice(String endPrice) {
		this.endPrice = endPrice;
	}
	public String getOtitle() {
		return otitle;
	}
	public void setOtitle(String otitle) {
		this.otitle = otitle;
	}
	public String getOrdernum() {
		return ordernum;
	}
	public void setOrdernum(String ordernum) {
		this.ordernum = ordernum;
	}
	public String getOuname() {
		return ouname;
	}
	public void setOuname(String ouname) {
		this.ouname = ouname;
	}
	public OrderAllFind() {
		super();
	}
	
	

}
