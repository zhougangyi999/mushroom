package com.mushroom;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@MapperScan(basePackages = "com.mushroom.dao")
@EnableTransactionManagement
@SpringBootApplication
@ServletComponentScan
@EnableCaching
@ComponentScan(basePackages="com.mushroom")
public class DemoApplication {

	 protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	        return application.sources(DemoApplication.class);
	    }
	 
	    public static void main(String[] args) throws Exception {
	        SpringApplication.run(DemoApplication.class, args);
	    }

}
