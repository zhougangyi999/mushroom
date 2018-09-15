package com.mushroom.pojo;

import java.util.List;

public class ResultMap {
	private  List<Mm_commodity> commodits;
	private List<Mm_attribute_name> attributeNames;
	private List<Mm_category> categories;
	public List<Mm_commodity> getCommodits() {
		return commodits;
	}
	public void setCommodits(List<Mm_commodity> commodits) {
		this.commodits = commodits;
	}
	public List<Mm_attribute_name> getAttributeNames() {
		return attributeNames;
	}
	public void setAttributeNames(List<Mm_attribute_name> attributeNames) {
		this.attributeNames = attributeNames;
	}
	public List<Mm_category> getCategories() {
		return categories;
	}
	public void setCategories(List<Mm_category> categories) {
		this.categories = categories;
	}
	
}
