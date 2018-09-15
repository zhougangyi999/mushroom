package com.mushroom.tools;

import java.util.HashMap;
import java.util.Map;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.util.EntityUtils;

import com.alibaba.fastjson.JSON;
 
 
 

public class Bank {
	private  static  String host = "https://yunyidata.market.alicloudapi.com";
	private  static   String path = "/bankAuthenticate4";
	private  static  String method = "POST";
	private  static   String appcode = "b607184ed352461d84aa8454e05ce3a3";
	//b607184ed352461d84aa8454e05ce3a3
	private  static  Bank bank;
	private Bank() {}
	private static class MyBank {
		private static final Bank BANK=new Bank();
	}
	public static Bank getInstabce() {
		 return bank=MyBank.BANK;
	}
	/**
	 * 
	 * @param cardNo  银行卡号
	 * @param phoneNo  手机号
	 * @param name  姓名
	 * @param idNo  身份证
	 */
    public static   Map<String, Object> bank(String  cardNo,String phoneNo,String name,String idNo) {
    	Map<String, String> headers = new HashMap<String, String>();
        //最后在header中的格式(中间是英文空格)为Authorization:APPCODE 83359fd73fe94948385f570e3c139105
        headers.put("Authorization", "APPCODE " + appcode);
        //根据API的要求，定义相对应的Content-Type
        headers.put("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        Map<String, String> querys = new HashMap<String, String>();
        Map<String, String> bodys = new HashMap<String, String>();
        bodys.put("ReturnBankInfo", "YES");
        bodys.put("cardNo", cardNo);
        bodys.put("idNo", idNo);
        bodys.put("name", name);
        bodys.put("phoneNo",phoneNo);
        try {
        	/**
        	* 重要提示如下:
        	* HttpUtils请从
        	* https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/src/main/java/com/aliyun/api/gateway/demo/util/HttpUtils.java
        	* 下载
        	*
        	* 相应的依赖请参照
        	* https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/pom.xml
        	*/
        	HttpResponse response = HttpUtils.doPost(host, path, method, headers, querys, bodys);
        	System.out.println(response.toString());
        	//获取response的body
        	///System.out.println(EntityUtils.toString(response.getEntity()));
        	HttpEntity  entity=response.getEntity();
        	String rs=EntityUtils.toString(entity);
        	System.err.println("===="+rs);
        	Map<String, Object> map = null;
        	if (null!=rs&&!"".equals(rs)) {
        		map = JSON.parseObject(rs);  
			}
        	return map;
        } catch (Exception e) {
        	e.printStackTrace();
        }
        return null;
	}
    
    public static void main(String[] args) {
    	Map<String, Object> map =   Bank.getInstabce().bank("6217002920135086719", "15111676435", "罗明飞", "431102199707166259");
    	// map.get("");通过key获得值
    	if (null!=map) {  //返回结果
    		for (String string :map.keySet()) {
				System.err.print(string);
				System.err.println("  值======"+map.get(string));
			}
		}
	}
}
