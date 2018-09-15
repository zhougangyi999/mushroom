package com.mushroom.dao;

import java.util.List;

import com.mushroom.pojo.Mm_category;
import com.mushroom.pojo.Mm_commodity;

public interface HomeClassDaos {
	/**
	 * 查找全部父分类
	 * */
List<Mm_category> select_maxcate();

/**
 * 查找全部二级分类
 * */
List<Mm_category>selelct_erjicate(int maxcatid);
/**
 * 查找全部三级分类
 * */
List<Mm_category>selelct_sanjicate(int maxcatid);

/**
 * 查找根据时间排序后十条商品
 * @return
 */
List<Mm_commodity>  selelct_asc_shop();
}
