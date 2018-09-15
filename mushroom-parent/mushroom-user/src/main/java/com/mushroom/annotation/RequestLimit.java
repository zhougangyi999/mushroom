package com.mushroom.annotation;

import java.lang.annotation.*;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.*;


@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@Documented
//最高优先级
@Order(Ordered.HIGHEST_PRECEDENCE)
public @interface RequestLimit {
    /**
     * 允许访问的次数
     */
    int count() default 3;
 
    /**
     * 时间段，多少时间段内运行访问count次
     */
    long time() default 60000;
 
}