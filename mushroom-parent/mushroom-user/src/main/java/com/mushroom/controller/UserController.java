package com.mushroom.controller;

import java.io.File;
import java.io.IOException;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.sql.Date;
import java.util.Random;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.apache.solr.client.solrj.util.ClientUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.ServletContextAware;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.mushroom.pojo.Mm_users;
import com.mushroom.service.UserService;
import com.mushroom.tools.Constants;
import com.mushroom.tools.RedisUtil;
import com.mushroom.tools.SecurityUtils;
import com.mushroom.tools.StringUtils;
import com.qq.connect.QQConnectException;
import com.qq.connect.api.OpenID;
import com.qq.connect.javabeans.AccessToken;
import com.qq.connect.oauth.Oauth;


@Controller
public class UserController  implements ServletContextAware{
	@Resource
	private ServletContext application;
	
	@Autowired
 private	RedisUtil RedisUtil;
 	
	@Autowired
	private UserService userService;
	
	@RequestMapping("/")
	public String gologin() {
		return "login";
		
	}
	


	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String Login(Mm_users muser,String code,HttpSession session) {
	
		if (muser.getPhone()!=""&&muser.getPhone()!=null&&code!=""&&code!=null) {//手机号码登录
			System.out.println("手机号码:"+muser.getPhone());
			System.out.println("验证码"+code);
			int ph_code = (int) session.getAttribute("phone_code");//session验证码
			String ph_num = (String) session.getAttribute("phone_num");//session电话
			int newcode = Integer.valueOf(code);//int类型验证码
			if (newcode!=ph_code||code==null||code=="") {
				System.out.println("验证码错误");
return "login";
			}else {//验证码输入正确
			
				Mm_users muser1=userService.selectByParam(muser);//查找数据库
				if (muser1!=null ){
					System.out.println("该号码已经注册..直接登录");
					session.setAttribute(Constants.USER_SESSION, muser1);//存入登陆后的用户
					return "forward:go_to_index";
				}else {
					muser.setPassword(SecurityUtils.md5Hex(StringUtils.randomNumbers(6)));//产生一个六位随机数数经过md5加密后的密码
					muser.setHeadportraitsrc("http://s11.mogucdn.com/p2/161201/upload_64kcjf86057g7a9kbd1k38j85k5c4_100x100.jpg");
					muser.setReserved5("0");//0为第一次注册
					muser.setUsername(ph_num);
					userService.insertSelective(muser);//注册
					session.setAttribute(Constants.USER_SESSION, muser);//存入登陆后的用户
					return "forward:go_to_index";
				}
			}
			
		}else {
			muser.setPassword(SecurityUtils.md5Hex(muser.getPassword()));
			if (userService.userLogin(muser) != null) {
				Mm_users MUSER=userService.userLogin(muser);	
				session.setAttribute(Constants.USER_SESSION, MUSER);//存入登陆后的用户
				return "forward:go_to_index";
			}
			return "login";
		}
		

	}
	

	/**
	 * qq登录回调
	 * @param request作用域
	 * @param session作用域
	 * @param attributes重定向可带参
	 * @return
	 */
	@SuppressWarnings("unused")
	@RequestMapping("/qqloginok")

public String qqloginok(HttpServletRequest request ,HttpSession session,RedirectAttributes attributes) {
	Mm_users musers=new Mm_users();//用户对象
	Random sun=new Random();//产生随机数
	try {
	     AccessToken accessTokenObj = (new Oauth()).getAccessTokenByRequest(request);
		String accessToKen=null,openID=null;
		long tokenExpireIn=0L;
	if (accessTokenObj.getAccessToken().equals("")) {   //用户的响应参数为空	
		return "login";//登录失败
	}else {
		accessToKen=accessTokenObj.getAccessToken();
		tokenExpireIn=accessTokenObj.getExpireIn();
		request.getSession().setAttribute("demo_access_token", accessToKen);
		request.getSession().setAttribute("demo_token_expirein", String.valueOf(tokenExpireIn));
		OpenID openIDobj=new OpenID(accessToKen);// 利用获取到的accessToken 去获取当前用的openid -------- start
		openID = openIDobj.getUserOpenID();//把这个id保存到数据库或者查找数据库
		System.out.println("qq登录的opid-----------"+openID);
		//通过openid获得user (qq列)    如果user==0  插入一条用户   同时把insert的user保存到session 中  else    直接保存到session中
		int userNum=userService.selectQID(openID);//查找是否存在这个qqid是否存在
		Mm_users muser;//一个新用户对象
		if (userNum>=1) {
			System.out.println("qq用户已经注册");
		}else if (userNum==0) {
			System.out.println("不存在");
			musers.setUsername("qq_"+openID.substring(1, 9)+sun.nextInt(999));//产生一个用户名
			musers.setUserqq(openID);
			musers.setReserved5("0");//0为第一次注册
			musers.setPassword(SecurityUtils.md5Hex(StringUtils.randomNumbers(6)));//产生一个六位随机数数经过md5加密后的密码
			musers.setHeadportraitsrc("http://s11.mogucdn.com/p2/161201/upload_64kcjf86057g7a9kbd1k38j85k5c4_100x100.jpg");//给一个默认头像
			userService.insertSelective(musers);//数据库注册
		}
		muser=userService.userQid(openID);//根据qq查找是否有这个对象
		System.out.println("是否存在这个用户"+muser.getUsername());
		if (muser==null) {
			System.out.println("登录失败");
			return "login";
		}else {//登录成功  跳转绑定手机号码页面
			if (muser.getPhone()==null||muser.getPhone().equals("")) {
				session.setAttribute("openid", muser.getUserqq());//把已经登录的qq存入session
				System.out.println("openidsession"+session.getAttribute("openid"));
				session.setAttribute(Constants.USER_SESSION, muser);//存入登陆后的用户s
			System.out.println("跳转到绑定手机号码页面");
				return "register_butiful";//跳转到绑定手机号码页面
			}	
		}
		session.setAttribute(Constants.USER_SESSION, muser);//存入登陆后的用户
		return "forward:go_to_index";
		} 
	} catch (QQConnectException e) {
		System.out.println("qq连接异常...");
		e.printStackTrace();
		
	}
	return "login";
}
	
	
	
		/**
		 * qq登录注册入口
		 * @param request
		 * @param response
		 * @throws IOException
		 */
		@RequestMapping("/qqlogin")
		public  void qqlogin(HttpServletRequest request, HttpServletResponse response) throws IOException {
			response.setContentType("text/html;charset=utf-8");
			try {
				response.sendRedirect(new Oauth().getAuthorizeURL(request));
			} catch (QQConnectException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
		
		@RequestMapping(value="user__information_go",method=RequestMethod.GET)
		public String user__information_go() {
			return "user_information";
			
		}
		/**
		 * 更新用户信息
		 * @param request
		 * @param session
		 * @return
		 * @throws ParseException
		 */
		@RequestMapping(value="user_updateUserDate")
		@ResponseBody
		public  boolean updateUserDate(HttpServletRequest request,HttpSession session) throws ParseException {
		boolean as=true;
		Mm_users muser=(Mm_users) session.getAttribute(Constants.USER_SESSION);
			String sex=request.getParameter("sex");
			String reserved1=request.getParameter("reserved1");
			String reserved2=request.getParameter("reserved2");
			String reserved3=request.getParameter("reserved3");
			String birthday=request.getParameter("birthday");
			System.out.println("birthday:"+birthday);
			String profession=request.getParameter("profession");
			String presentation=request.getParameter("presentation");
			//Mm_users muser=new Mm_users();
			muser.setSex(Integer.valueOf(sex));
			muser.setReserved1(reserved1);
			muser.setReserved2(reserved2);
			muser.setReserved3(reserved3);
		
			if (!birthday.equals("Wed Aug 01 00:00:00 CST 2018")&&birthday!="Wed Aug 01 00:00:00 CST 2018"&&birthday!=null&&birthday!="") {
				    muser.setBirthday(Date.valueOf(birthday));
			}
			muser.setProfession(profession);
			muser.setPresentation(presentation);
		
		int updawhy=	userService.updateUser(muser);
		if (updawhy<=0) {
			as=false;
		}
			return as;
			
		}
		@RequestMapping(value="/user_bind_phone",method=RequestMethod.GET)
		public String user_bind_phone() {
			return "bind_phone.html";
		}
		
		/**
		 * 修改手机号码
		 * @param phone
		 * @param session
		 * @return
		 */
		@RequestMapping(value="/user_update_phone",method=RequestMethod.POST)
		@ResponseBody
		public int user_update_phone(String phone,HttpSession session) {
		Mm_users muser= (Mm_users) session.getAttribute(Constants.USER_SESSION);
			Mm_users muser1=new Mm_users();
		muser.setPhone(phone);
		session.setAttribute(Constants.USER_SESSION, muser);
			muser1.setUid(muser.getUid());
			muser1.setPhone(phone);
		int as= userService. updateUser(muser1);
			return as;
		}
		@RequestMapping("/bind_user_photo")
		public  String bind_user_photo() {
			return "bind_user_photo";
			
		}
		
		/**
		 * 上传头像
		 * @param image_url
		 * @param request
		 * @param session
		 * @return
		 */
		@RequestMapping("/update_user_photo")
		//  @ResponseBody 
		public  String update_user_photo(@RequestParam("image_url") MultipartFile image_url,HttpServletRequest request,HttpSession session) {
			System.out.println(image_url);
			if (image_url.isEmpty()) {
				return "false";
			}
			String fileName=image_url.getOriginalFilename();
			//String	basePath=request.getSession().getServletContext().getRealPath("/statics/imgName"+File.separator+"");
			//String basePath = application.getRealPath("/user_iamges")+File.separator;
	 String basePath = request.getServletContext().getRealPath("/user_iamges");
			int size = (int) image_url.getSize();
			System.out.println("fileName:"+fileName+"----->"+size);
			File file=new File(basePath+"/"+fileName);
			System.out.println("文件写入路径:"+basePath+"\\"+fileName);
			 if(!file.getParentFile().exists()){ //判断文件父目录是否存在
				 System.out.println("不存在创建...");
				 file.getParentFile().mkdir();
		        }
		        try {
					image_url.transferTo(file);
				} catch (IllegalStateException | IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} 
		  Mm_users muser=      (Mm_users) session.getAttribute(Constants.USER_SESSION);
		  muser.setHeadportraitsrc("user_iamges/"+fileName);
		  Mm_users umuser=new Mm_users();
		  umuser.setUid(muser.getUid());
		  umuser.setHeadportraitsrc("user_iamges/"+fileName);
		  
		  userService.updateUser(umuser);
	
			return "bind_user_photo";
			
		}


		/**
		 * 
		 * 进入修改密码页面
		 * @param session
		 * @param model
		 * @return
		 */
		@RequestMapping("/user_update_password")
		public  String user_update_password(HttpSession session,Model model) {
			  Mm_users muser=      (Mm_users) session.getAttribute(Constants.USER_SESSION);
			Mm_users muser_model=  userService.selectUser(muser.getUid());//查出用户登陆的状态
			model.addAttribute("muser_model",muser_model);
			System.out.println("aaaaaaaaaaaaaaaaaaaaaaaa:"+muser.getReserved5());
			return "user_update_password";
			
		}
		
		@ResponseBody
		@RequestMapping("/Veri_now_password")
		public String Veri_now_password(String now_passwrod,HttpSession session) {
		String md=	SecurityUtils.md5Hex(now_passwrod);
			String isok="no";	
			  Mm_users muser=   (Mm_users) session.getAttribute(Constants.USER_SESSION);
		Mm_users musers=	userService.Veri_now_password(muser.getUid());
		if (md.equals(musers.getPassword())) {
			isok="ok";
		}	 
			return isok;
			
		}
		

		@Override
		public void setServletContext(ServletContext arg0) {
			// TODO Auto-generated method stub
			this.application = arg0;
		}
		/**
		 * 设置密码或者更改密码
		 * @param session
		 * @param now_passwrod
		 * @param js_passbox
		 * @param repeat_passwrod
		 * @return
		 */
		@RequestMapping("/user_update_nowpassword")
		@ResponseBody
		public Object user_update_nowpassword(HttpSession session,String now_passwrod,String js_passbox,String repeat_passwrod) {
			int as=0;
			if ("".equals(now_passwrod)||now_passwrod.length()==0) {
				System.out.println("直接设定新密码....");
				//设定新密码
				String md5_js_passbox=SecurityUtils.md5Hex(js_passbox);
				  Mm_users muser=   (Mm_users) session.getAttribute(Constants.USER_SESSION);
				  muser.setPassword(md5_js_passbox);
				  muser.setReserved5("1");
				int is=userService.updateUser(muser);	as=is;
				System.out.println("密码是否更改成功:"+is);
			}
			String md=	SecurityUtils.md5Hex(now_passwrod);
			  Mm_users muser=   (Mm_users) session.getAttribute(Constants.USER_SESSION);
			  if (muser.getPassword().equals(md)) {
				  String md5_js_passbox=SecurityUtils.md5Hex(js_passbox);
				  muser.setPassword(md5_js_passbox);
					int is=userService.updateUser(muser);
					as=is;
					System.out.println("不设定新密码.是否更改成功"+is);
			}
			return as;
			
		}
}
