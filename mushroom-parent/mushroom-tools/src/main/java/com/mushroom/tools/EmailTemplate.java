package com.mushroom.tools;

/**
 * 邮箱模板获得类 
 * emailGo(String url,String code,String  email)
 * 
 * @author Administrator
 *
 */
public class EmailTemplate {
	/**
	 * 
	 * @param url  本项目网站网址
	 * @param code  验证码  ，（md5加密后的）
	 * @param email  邮箱地址
	 * @return
	 */
	public  static String  getTemplate(String url,String code,String  email) {
		String string=new String();
		StringBuffer str2=new StringBuffer();
		str2.append(url);
		str2.append("?emali=");
		str2.append(email);
		str2.append("&code=");
		str2.append(code);
		string= MyFileRead.getInstabce().getStr();
		if (string!=null) {
			string=string.replace("{emali}",email);
			string=string.replace("{url}",str2);
		}		 
		return string;
	}
}
