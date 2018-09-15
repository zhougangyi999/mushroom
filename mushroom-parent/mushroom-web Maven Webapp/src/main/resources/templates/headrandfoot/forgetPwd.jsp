<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>找回密码</title>
		<link rel="icon" href="../../statics/img/login/logo_ioc.png" type="image/x-icon">
		<link rel="stylesheet" type="text/css" href="../../statics/css/forgetPwd.css" />
		<link rel="stylesheet" type="text/css" href="../../statics/css/footer.css" />
		<script src="../../statics/js/jquery-2.1.4.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="../../statics/js/forgetPwd.js" type="text/javascript" charset="utf-8"></script>
		<script src="../../statics/js/pwdStrong.js" type="text/javascript" charset="utf-8"></script>
	</head>

	<body>
		<div class="article">
			<div class="info">
				<div>
					<a href="${pageContext.request.contextPath }/index.html" class="header_img"></a>
				</div>
				<div class="for_input">
					<div class="safe_forget">
						<h3>安全设置-找回密码</h3>
						<div class="step_box">
							<ul class="clearfix">
								<li><span class="seqNumber">01/</span><span>输入登录名</span></li>
								<li class="no2"><span class="seqNumber">02/</span><span>验证信息</span></li>
								<li class="no3"><span class="seqNumber">03/</span><span>重置密码</span></li>
							</ul>
						</div>
					</div>
					<!--输入登录名-->
					<div id="modelform" class="formbox">
						<form data-action="" class="formelem" method="post">
							<ul>
								<li>
									<div class="inputbox">
										<span class="accountLabel">账号：</span>
										<input type="text" name="userName" value="" data-type="username" class="ui-input" placeholder="请输入用户名/手机">
									</div>
								</li>
								<li class="lg_chk_wrap">
									<p class="error" id="v2error"></p>
									<div id="_content"></div>
								</li>
							</ul>
							<div class="subbox">
								<a href="javascript:;" class="btn_check" id="nextConfirm">下一步</a>
							</div>
						</form>
					</div>
					<!--验证信息-->
					<div class="check_formbox ">
						<form data-action="" class="formelem" method="post">
							<h3>已向你的手机号码<span class="red_txt"></span>发送验证码，请在下方输入： </h3>
							<input type="hidden" class="phone_num" value=""/>
							<div class="phonecheck_box"> 
								<label for="" class="label_title">手机验证码：</label>
								<input type="text" class="js_phone" maxlength="6">
								<input type="button" class="js_getcheck" value="重新获取"/>
								<span class="error"></span>
							</div>
					
							<div class="subbox">
								<a href="javascript:;" class="btn_check">下一步</a>
								<a href="${pageContext.request.contextPath }/user/forPw/forgetPwd.do" class="gray_txt">更换其他方式找回</a>
							</div>
						</form>
					</div>
					
					<!--重置密码-->
					<div class="again_pwd">
						<h3>*恭喜你！验证成功，请重置密码并妥善保管</h3>
						<p></p>
						<form action="" class="formpwd">
							<div>
								<span>新 &nbsp;密&nbsp;码</span> 
								<input type="password" placeholder="设置您的密码" class="new_pwd" onkeyup="pwdLengthStrong(this.value)"/>
								<span class="strong_pwd"></span>
								<span class="error"></span>
							</div>
							<div>
								<span>确定密码</span>
								<input type="password" placeholder="重新输入您设置的密码" class="new_pwd_again"/>
								<span class="again_error"></span>
							</div>
							<input type="button" value="确认" class="ok_pwd" />
						</form>
					</div>
				</div>
			</div>
		</div>

		<!--底部-->
		<!--底部-->
		<div class="footer">
			<div class="footer_guide">
				<ul class="footer_list">
					<li class="guide">
						<div class="guide_way">
							<p class="help">
								<a href="#">- 新手帮助 -</a>
							</p>
							<ul class="help_list">
								<li>
									<a href="#">常见问题</a>
								</li>
								<li>
									<a href="#">自助服务</a>
								</li>
								<li>
									<a href="#">联系客服</a>
								</li>
								<li>
									<a href="#">意见反馈</a>
								</li>
							</ul>
						</div>
					</li>
					<li class="guide">
						<div class="guide_way">
							<p class="help">
								<a href="#">- 权益保障 -</a>
							</p>
							<ul class="help_list">
								<li>
									<a href="#">全国包邮</a>
								</li>
								<li>
									<a href="#">7天无理由退货</a>
								</li>
								<li>
									<a href="#">退货运费补偿</a>
								</li>
								<li>
									<a href="#">限时发货</a>
								</li>
							</ul>
						</div>
					</li>
					<li class="guide">
						<div class="guide_way">
							<p class="help">
								<a href="#">- 支付方式 -</a>
							</p>
							<ul class="help_list">
								<li>
									<a href="#">微信支付</a>
								</li>
								<li>
									<a href="#">支付宝</a>
								</li>
								<li>
									<a href="#">白付美支付</a>
								</li>
							</ul>
						</div>
					</li>
					<li class="guide">
						<div class="guide_way">
							<p class="help">
								<a href="#">- 移动客户端下载 -</a>
							</p>
							<ul class="help_list">
								<li>
									<a href="${pageContext.request.contextPath }/index.html">潮时尚</a>
								</li>
								<li style="margin-right: 0px;">
									<a href="#">美丽说</a>
								</li>
								<li>
									<a href="#">uni引力</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
			<div class="about_me">
				<div class="about_me_list">
					<ul>
						<li>
							<a href="#">关于我们</a>
						</li>
						<li>
							<a href="#">招聘信息</a>
						</li>
						<li>
							<a href="#">联系我们</a>
						</li>
						<li>
							<a href="#">商家入驻</a>
						</li>
						<li>
							<a href="#">商家后台</a>
						</li>
						<li>
							<a href="#">潮时尚商学院</a>
						</li>
						<li>
							<a href="#">商家社区</a>
						</li>
						<li>
							<a href="#">规则中心</a>
						</li>
						<li>
							<a href="#">有害信息举报</a>
						</li>
						<li>
							<a href="#">©2017 Mogujie.com 杭州卷瓜网络有限公司</a>
						</li>
					</ul>
				</div>
				<div class="about_me_license">
					<ul>
						<li>
							<a href="#">营业执照 ：913301065526808764<span class="tiao">|</span></a>
						</li>
						<li>
							<a href="#">网络文化经营许可证：浙网文（2016）0349-219号<span class="tiao">|</span></a>
						</li>
						<li>
							<a href="#">增值电信业务经营许可证：浙B2-20110349<span class="tiao">|</span></a>
						</li>
						<li>
							<a href="#">安全责任书<span class="tiao">|</span></a>
						</li>
						<li>
							<a href="#">浙公网安备 33010602002329号<span class="tiao">|</span></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
	</body>

</html>