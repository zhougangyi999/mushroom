package com.mushroom.converter;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.springframework.core.convert.converter.Converter;
public class DateConverter implements Converter<String, Date>   {
	private final DateFormat[] dfs={
			new SimpleDateFormat("yyyy年MM月dd日"),
			new SimpleDateFormat("yyyy-MM-dd"),
			new SimpleDateFormat("MM/dd/yy"),
			new SimpleDateFormat("yyyy.MM.dd"),
			new SimpleDateFormat("yyyyMMdd"),
			new SimpleDateFormat("yyyy/MM/dd")
	};
	@Override
	public Date convert(String str)   
    {  		 
		Date d = null;   
        for(DateFormat df: dfs){
			try {
				 df.parse(str);
				 
			} catch (ParseException e) {
				  e.printStackTrace();
				System.out.println("");
				continue;
			}
		} 
        return d; 
    }

}
