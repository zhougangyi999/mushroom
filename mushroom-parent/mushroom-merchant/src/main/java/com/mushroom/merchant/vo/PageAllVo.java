package com.mushroom.merchant.vo;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public class PageAllVo implements Serializable {

	private List<Map<String, Object>> list;

	private List<Map<String, Object>> listpa;
	
	private int pages;

	private int pageNum;

	private long totol;

	private String img_1 = "../statics/merchant/img/images/TB1RrNxGXXXXXciXpXXAz6UFXXX-16-16.png";

	private String img_2 = "../statics/merchant/img/images/TB1c3JyGXXXXXb4XpXXAz6UFXXX-16-16.png";

	private String img_3 = "../statics/merchant/img/images/TB1JwWkLXXXXXcpXXXXXXXXXXXX-32-16.png";

	public String getImg_1() {
		return img_1;
	}

	public void setImg_1(String img_1) {
		this.img_1 = img_1;
	}

	public String getImg_2() {
		return img_2;
	}

	public void setImg_2(String img_2) {
		this.img_2 = img_2;
	}

	public String getImg_3() {
		return img_3;
	}
	

	public List<Map<String, Object>> getListpa() {
		return listpa;
	}

	public void setListpa(List<Map<String, Object>> listpa) {
		this.listpa = listpa;
	}

	public void setImg_3(String img_3) {
		this.img_3 = img_3;
	}

	public PageAllVo(List<Map<String, Object>> list, int pages, int pageNum, long totol) {
		super();
		this.list = list;
		this.pages = pages;
		this.pageNum = pageNum;
		this.totol = totol;
	}

	public PageAllVo() {
		super();
	}

	public List<Map<String, Object>> getList() {
		return list;
	}

	public void setList(List<Map<String, Object>> list) {
		this.list = list;
	}

	public int getPages() {
		return pages;
	}

	public void setPages(int pages) {
		this.pages = pages;
	}

	public int getPageNum() {
		return pageNum;
	}

	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}

	public long getTotol() {
		return totol;
	}

	public void setTotol(long totol) {
		this.totol = totol;
	}

}
