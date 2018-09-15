package com.mushroom.tools;

import java.util.List;
import java.util.Map;

/**
 * 基类page中包含公有翻页参数及保存查询到的结果以被页面遍历，
 * 被子类继承后将增加不同的查询条件 。 
 * 
 * @author David
 *
 */
public class Page {
		
	  /** 每页显示条数默认为30条 */
    public static final int DEFAULT_SIZE = 30;

    /** 当前页码， 从1开始计 */
    private int current;

    /** 每页条数 */
    private int size;

    /** 总条数 */
    private long count;

    /** 查询参数 */
    private Map<String, Object> conditions;

    /** 当前页数据 */
    private List<Object> datas;

    public Page() {
        // 设置默认值
        current = 1;
        size = DEFAULT_SIZE;
    }

    /** 获取当前页码 */
    public int getCurrent() {
        return current;
    }

    /** 设置当前页码 */
    public void setCurrent(int current) {
        this.current = current;
    }

    /** 获取每页显示条数 */
    public int getSize() {
        return size;
    }

    /** 设置每页显示条数 */
    public void setSize(int size) {
        this.size = size;
    }

    /** 获取查询参数 */
    public Map<String, Object> getConditions() {
        return conditions;
    }

    /** 设置查询参数 */
    public void setConditions(Map<String, Object> conditions) {
        this.conditions = conditions;
    }

    /** 获取当前页数据 */
    public List<Object> getDatas() {
        return datas;
    }

    /** 设置当前页数据 */
    public void setDatas(List<Object> datas) {
        this.datas = datas;
    }

    /** 获取总条数 */
    public long getCount() {
        return count;
    }

    /** 设置总条数 */
    public void setCount(long count) {
        this.count = count;
    }

    /** 获取总页数 */
    public long getTotalPages() {
        if (datas == null || datas.isEmpty())
            return 0;

        long totalPages = count / size;
        if (count%size != 0) {
            totalPages ++;
        }

        return totalPages;
    }

    /** 获取从第几条数据开始查询 */
    public long getStart() {
        return (current-1) * size;
    }

    /** 判断是否还有前一页 */
    public boolean getHasPrevious() {
        return current == 1 ? false : true;
    }

    /** 判断是否还有后一页 */
    public boolean getHasNext() {
        return (getTotalPages()!=0 && getTotalPages()!=current) ? true : false;
    }
}
