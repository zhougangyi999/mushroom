package com.mushroom.tools;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;


public class MyFileRead {
	private static StringBuffer str; 
	private static MyFileRead myFileRaed;
	private MyFileRead() {
		str=new StringBuffer();
		InputStream inputStream=null;
		InputStreamReader inputStreamReader=null;
		BufferedReader br=null;
		try {
			inputStream =MyFileRead.class.getClassLoader().getResourceAsStream("resources/email/mailTemplate");
			inputStreamReader=new InputStreamReader(inputStream);
			br=new BufferedReader(inputStreamReader);
			String string="";
			while ((string=br.readLine())!=null) {
				str.append(string);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			if(br!=null) {
				try {
					br.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if(inputStreamReader!=null) {
				try {
					inputStreamReader.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if(inputStream!=null) {
				try {
					inputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}
	private static class MyFileRaedHelper {
		private static final MyFileRead MY_FILE_RAED=new MyFileRead();
	}
	public static MyFileRead  getInstabce() {
		 return myFileRaed=MyFileRaedHelper.MY_FILE_RAED;
	}
	public static String getStr() {
		return str.toString();
	}
}
