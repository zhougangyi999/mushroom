package com.mushroom.tools;

import java.io.UnsupportedEncodingException;
import java.util.Properties;

import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
/**
 * 邮箱接口发送邮件  sendMail(String to, String subject, String html)
 *  to 接受人
 * subject 主题
 * html  模板 (通过调用EmailTemplate的getTemplate()获得)
 * @author Administrator
 *
 */
public class EmailBuilderGo {
	private static final String HOST = MailConfig.host;
    private static final Integer PORT = MailConfig.port;
    private static final String USERNAME = MailConfig.userName;
    private static final String PASSWORD = MailConfig.passWord;
    private static final String emailForm = MailConfig.emailForm;
    private static final String timeout = MailConfig.timeout;
    private static final String personal = MailConfig.personal;
    private static JavaMailSenderImpl mailSender = createMailSender();
    /**
     * 邮件发送器
     *
     * @return 配置好的工具
     */
    private static JavaMailSenderImpl createMailSender() {
        JavaMailSenderImpl sender = new JavaMailSenderImpl();
        sender.setHost(HOST);
        sender.setPort(PORT);
        sender.setUsername(USERNAME);
        sender.setPassword(PASSWORD);
        sender.setDefaultEncoding("Utf-8");
        Properties p = new Properties();
        p.setProperty("mail.smtp.timeout", timeout);
        p.setProperty("mail.smtp.auth", "false");
        sender.setJavaMailProperties(p);
        return sender;
    }

    /**
     * 发送邮件
     *
     * @param to 接受人
     * @param subject 主题
     * @param html 发送内容  模板 (通过调用EmailTemplate的getTemplate()获得)
     * @throws MessagingException 异常
     * @throws UnsupportedEncodingException 异常
     */
    public static boolean sendMail(String to, String subject, String html) throws MessagingException,UnsupportedEncodingException {
        try {
			MimeMessage mimeMessage = mailSender.createMimeMessage();
			// 设置utf-8或GBK编码，否则邮件会有乱码
			MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
			messageHelper.setFrom(emailForm, personal);
			messageHelper.setTo(to);
			messageHelper.setSubject(subject);
			messageHelper.setText(html, true);
			mailSender.send(mimeMessage);
			return true;
		} catch (MailException e) {
			e.printStackTrace();
			return false;
		}
    }
}
