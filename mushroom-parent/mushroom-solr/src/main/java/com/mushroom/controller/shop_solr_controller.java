package com.mushroom.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.solr.client.solrj.SolrClient;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrQuery.ORDER;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageHelper;
import com.mushroom.pojo.ResultMap;
import com.mushroom.tools.FastJsonConvert;
import com.mushroom.tools.Page;

/**
 * solr搜索
 * */
@Controller
public class shop_solr_controller {

	@Autowired
	private SolrClient solrclient;
	
	
	@RequestMapping("/zhu_query")
	public String solr_text(String item_keywords,Model model,String type,String maxPrice,String  minPrice,Page page) throws SolrServerException, IOException {
		SolrQuery solrquery=new SolrQuery();
		String types="";
		
		if (item_keywords==null||item_keywords=="") {
			types="all";
			model.addAttribute("shop_query_types",types);
			solrquery.set("q", "*:*");
		}else {
			solrquery.set("q", "item_keywords:"+item_keywords+"");
		}
	if (maxPrice!=null||minPrice!=null) {
		solrquery.set("q", "and zhekou:[ "+minPrice+" TO "+maxPrice+"]");
		model.addAttribute("minPrice",minPrice);model.addAttribute("maxPrice",maxPrice);
	}
	if (page.getCurrent()==0||page.getCurrent()==-1) {
		page.setCurrent(1);
	}else {
		solrquery.setStart((int)page.getStart());  //开始页
	}
		
		solrquery.setRows(page.getSize());//一页显示多少条
		solrquery.setHighlight(true); //高亮
		solrquery.addHighlightField("title");//高亮显示的列
		solrquery.setHighlightSimplePre("<span style='color:red'>");  //设置前缀
	
		if ("xin".equals(type)) {
			types="order";
			model.addAttribute("shop_query_types",types);
			solrquery.addSort("shopdatetime",ORDER.desc);//根据商品发布时间进行排序
		}
	
		  //设置后缀
		solrquery.setHighlightSimplePost("</span>");
		QueryResponse response=solrclient.query(solrquery);
		 SolrDocumentList results=response.getResults();//文档结果集
		 if (results.size()==0||results.size()!=page.getSize()) {
			 page.setCurrent(0);
			 }
		 Map<String, Map<String, List<String>>> maplist=response.getHighlighting();//高亮显示的返回结果
		 List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();// * 静态html资源里面的对象 -- ${list}
			Map<String, Object> m;
		 for (SolrDocument solrDocument : results) {
			 
				Map<String, List<String>> fieldMap = maplist.get(solrDocument.get("id"));
				List<String> stringlist = fieldMap.get("title");
				m = new HashMap<String, Object>();
				if (stringlist!=null) {
					m.put("title", stringlist.get(0));
				}else {
					m.put("title",solrDocument.get("title") );
				}
				float discount=(float) solrDocument.get("discount");
			//	System.out.println("折扣"+discount);
				Float prompt_price=  (Float) solrDocument.get("prompt_price");
		  double zhekou=prompt_price*discount;
		//  System.out.println("折后价:"+zhekou);
			m.put("zhekou", String.format("%.2f", zhekou));
	//		System.out.println(stringlist.get(0)	);//标题
		m.put("name", solrDocument.get("name"));
		//System.out.println(solrDocument.get("name"));//商品类型名称
		m.put("main_img", solrDocument.get("main_img"));
		//System.out.println(solrDocument.get("main_img"));//图片
		m.put("attribute_value", solrDocument.get("attribute_value"));
	   //System.out.println(solrDocument.get("attribute_value"));//商品属性
		m.put("commodity_id", solrDocument.get("commodity_id"));	
		//System.out.println(solrDocument.get("commodity_id"));//商品id
		m.put("prompt_price", solrDocument.get("prompt_price"));	
	    //System.out.println(solrDocument.get("prompt_price"));//商品价格
		m.put("attribute_value_name", solrDocument.getFieldValue("attribute_value_name"));	
	    //System.out.println(solrDocument.getFieldValue("attribute_value_name"));//商品属性2
		//	System.out.println("--------------------------------------------");
			list.add(m);
		}
		 
		 model.addAttribute("page",page);
		 model.addAttribute("item_keywords_1",item_keywords);
		 model.addAttribute("shop_list",list);
	
		return "shop_search";
	}
	
	
	 int i=1;
	/**商品首页懒加载
	 * @return
	 * @throws SolrServerException
	 * @throws IOException
	 */
	@RequestMapping("/show_shop")
	@ResponseBody
	public String show_shop(Model model) throws SolrServerException, IOException {
	
		
		SolrQuery solrquery=new SolrQuery();
		solrquery.set("q", "*:*");
		solrquery.setRows(300);
		solrquery.addSort("shopdatetime",ORDER.desc);//根据商品发布时间进行排序
		QueryResponse response=solrclient.query(solrquery);
		 SolrDocumentList results=response.getResults();//文档结果集
		 List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		 Map<String, Object> m;
		 for (SolrDocument solrd : results) {
				m = new HashMap<String, Object>();
				  m.put("title", solrd.get("title"));
			    m.put("name", solrd.get("name"));
				m.put("src", solrd.get("main_img"));		
				m.put("attribute_value", solrd.get("attribute_value"));		
				m.put("commodity_id", solrd.get("commodity_id"));			
				m.put("price", solrd.get("prompt_price"));	 
				m.put("attribute_value_name", solrd.getFieldValue("attribute_value_name"));	
				list.add(m);
		}
		 String json=FastJsonConvert.convertObjectToJSON(list);
	
		i++;
		 System.out.println("第"+i+"次请求solr服务器");

		return json;
		
		
	}	
}
