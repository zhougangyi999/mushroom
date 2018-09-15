package com.mushroom.tools;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
/**
 * 邮箱配置文件加载类
 * @author Administrator
 *
 */
public class MailConfig {
	private static final String PROPERTIES_DEFAULT = "resources/email/mailConfig.properties";
    public static String host;
    public static Integer port;
    public static String userName;
    public static String passWord;
    public static String emailForm;
    public static String auth;
    public static String protocol;
    
    public static String timeout;
    public static String personal;
    public static Properties properties;
    static{
        init();
    }

    /**
     * 初始化
     */
    private static void init() {
        properties = new Properties();
        try{
            InputStream inputStream = MailConfig.class.getClassLoader().getResourceAsStream(PROPERTIES_DEFAULT);
            properties.load(inputStream);
            inputStream.close();
            host = properties.getProperty("mailHost");
            port = Integer.parseInt(properties.getProperty("mailPort"));
            userName = properties.getProperty("mailUsername");
            passWord = properties.getProperty("mailPassword");
            emailForm = properties.getProperty("mailFrom");
            protocol=properties.getProperty("protocol");
            auth=properties.getProperty("auth");
            timeout = properties.getProperty("mailTimeout");
            personal = "春泥健康";
        } catch(IOException e){
            e.printStackTrace();
        }
    }
}
