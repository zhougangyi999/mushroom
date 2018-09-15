package com.mushroom.merchant.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class DivTextUtil {
	
	private static DivTextUtil divTextUtil;
	
	private DivTextUtil(){
		
	}
	public static DivTextUtil getDivTextUtil(){
		if(divTextUtil==null)
			divTextUtil=new DivTextUtil();
		return divTextUtil;
	}
	
	 public static String readFileByLines(String fileName) { 
		 	String longText="";
	        File file = new File(fileName);  
	        BufferedReader reader = null;  
	        try {  
	            System.out.println("以行为单位读取文件内容，一次读一整行：");  
	           reader = new BufferedReader( new InputStreamReader(new FileInputStream(file),"GBK"));  
	            String tempString = null;  
	            int line = 1;  
	            // 一次读入一行，直到读入null为文件结束  
	            while ((tempString = reader.readLine()) != null) {  
	                // 显示行号  temp.getBytes("iso8859-1"), "GBK")
	            	 //tempString=new String(tempString.getBytes("iso8859-1"), "GBK"); 
	                System.out.println("line " + line + ": " + tempString);  
	                line++;
	                longText+=tempString;
	            }  
	            reader.close(); 
	            return longText;
	        } catch (IOException e) {  
	            e.printStackTrace();  
	        } finally {  
	            if (reader != null) {  
	                try {  
	                    reader.close();  
	                } catch (IOException e1) {  
	                }  
	            }  
	        } 
	        
	        return null;
	    }  

}
