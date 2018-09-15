package com.mushroom.merchant.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfiturer implements WebMvcConfigurer {

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		String[] as={"/merchant/merchandise_in_sale_index.html","/merchant/merchandise_in_sale_index","/merchant/merchandise_in_warehouse_index.html","/merchant/merchandise_in_warehouse_index","/merchant/consignment_index.html"};
		List<String> patterns=new ArrayList<String>();
		for (String string : as) {
			patterns.add(string);
		}
		// addPathPatterns 配置要拦截的地址
		registry.addInterceptor(new LoginInterceptor()).addPathPatterns(patterns);
	}

}
