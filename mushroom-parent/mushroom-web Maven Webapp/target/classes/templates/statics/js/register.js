$(function() {
	//鼠标按下拖动事件
	$("#nc_1_n1z").mousedown(function(e) {
		var oleft = $("#nc_1_n1z").position().left; //DIV在页面的位置
		var x = e.pageX - oleft; //获得鼠标指针离DIV元素左边界的距离
		var wh = $("#nc_1_n1t").width(); //获得父元素的宽度
		//绑定鼠标的移动事件
		if(oleft == wh - 40) {
			return;
		}
		$(document).bind("mousemove", function(ev) {
			$("#nc_1_n1z").stop(); //加上这个之后
			$("#nc_1__bg").stop();
			var _x = ev.pageX - x; //获得X轴方向移动的值
			var wh = $("#nc_1_n1t").width(); //获得父元素的宽度
			if(_x <= 0) return;
			//验证通过
			if(_x > wh - 40) {
				$("#nc_1_n1z").animate({
					left: wh - 40 + "px"
				}, 10);
				$("#nc_1__bg").animate({
					"width": wh + "px"
				}, 10);
				$("#nc_1_n1z").removeClass("icon-xiaojiantou")
					.addClass("icon-zhengque").css("color", "#7ac23c");
				$("#nc-lang-cnt").text("验证通过");

				$("#nexts").removeAttr("disabled").addClass("btnok");
			
				$(this).unbind("mousemove");
				return;
			}

			$("#nc_1_n1z").animate({
				left: _x + "px"
			}, 10);
			$("#nc_1__bg").animate({
				"width": (_x + 20) + "px"
			}, 10);
		});
	});

	//下一步13x，14x，15x，17x，18x
	$("#nexts").click(function() {
	    
		if(ckinput()){
			//发送验证码
			$("#J_AgreementDialog2").show();
			
		}
			return false;

	});
   
	$("#J_Mobile").blur(function() {
		if(ckinput()) {
			$("#msg-cnt-text").text("");
			$("#IJ_MsgMobile").removeClass("icon-chucuo").addClass("icon-zhengque").css("color", "#7ac23c")
			$("#J_Mobile").removeClass("err-input");
		}
	});
	//鼠标离开
	$(document).mouseup(function() {
		$("#nc_1_n1z").stop(); //加上这个之后
		$("#nc_1__bg").stop()
		var oleft = $("#nc_1_n1z").position().left; //DIV在页面的位置
		var wh = $("#nc_1_n1t").width(); //获得父元素的宽度
		if(oleft < wh - 40) {
			$("#nc_1_n1z").animate({
				left: "0px"
			}, 100);
			$("#nc_1__bg").animate({
				"width": 10 + "px"
			}, 100);
		}
		$(this).unbind("mousemove");
	});

	//发送验证码
	$("#J_BtnMobileCode").click(function() {
		var i = 60;
		//发送按钮关闭               		
		$("#J_BtnMobileCode").attr("disabled", "disabled");
		$("#J_BtnMobileCode").removeClass("btngo");
		var plag = setInterval(function() {
			$("#J_BtnMobileCode").text("重发验证码(" + i + "s)");
			i--;
			if(i <= 0) {
				//发送按钮启动          
				$("#J_BtnMobileCode").text("重发验证码");
				clearInterval(plag);
				$("#J_BtnMobileCode").removeAttr("disabled").addClass("btngo");
				i = 60;
			}
		}, 1000);
	});
	//提交验证码
	$("#J_BtnMobileCodeForm").click(function() {

		if(cksecurity()){
			//发送验证码
			$("#J_AgreementDialog2,#J_MobileForm").hide();
			$("#form-main-list2").show();
			$(".steps-4").find("li").eq(1).addClass("active");
			
		}
	    return false;
	})

	//密码强度
	$("#J_Password").focus(function() {
		$("#J_PwdTip").show();
	});
	$("#J_Password").blur(function() {
		$("#J_PwdTip").hide();
	})
	//第一次密码 zaicPwd()
	$("#J_Password").blur(function() {
		return ckpassword()
	});
	//强度判断
	$("#J_Password").keyup(function() {
		grade()
	})
	//第二次密码 zaicPwd()
	$("#J_RePassword").blur(function() {
		return zaicPwd()

	});
	//提交密码
	$("#J_BtnInfoForm").click(function() {
		if(ckpassword()) {
			if(zaicPwd()){
				$("#lang-zh-S").show();
				$(".steps").hide();
				$("#form-main-list2,form-main-list1,#content-ok").hide();
				return false;
			}
			return false;
		}
		return false;
	});

});

//验证手机格式
function ckinput() {
	var ckphone = /^1[3,4,5,7,8][0-9]{9}$/
	var phone = $("#J_Mobile").val().trim();
	if(phone.length == 0) {
		$("#J_MsgMobile").show();
		$("#IJ_MsgMobile").removeClass("icon-zhengque").addClass("icon-chucuo").css("color", "red");;
		$("#msg-cnt-text").text("请输入你的手机号码");
		$("#J_Mobile").addClass("err-input");
		return false;
	}
	if(!ckphone.test(phone)) {
		$("#J_MsgMobile").show();
		$("#IJ_MsgMobile").removeClass("icon-zhengque").addClass("icon-chucuo").css("color", "red");;
		$("#msg-cnt-text").text("手机格式不正确,请重新输入");
		$("#J_Mobile").addClass("err-input");
		return false;
	}

	return true;
}

//验证手机验证码
function cksecurity() {
	var ck = /^[0-9]{6}$/
	if(!ck.test($("#J_MobileCode").val().trim())) {
		$("#id-assertive-messg").text("验证码是6位数,请重新输入!");
		$("#J_MobileCode").addClass("err-input");
		$("#J_MsgResendCode").css("color", "red").removeClass("icon-zhengque");
		$("#iconfont_J_BtnMobileCode").removeClass("icon-zhengque").addClass("icon-chucuo").css("color", "red");
		return false;
	}
	return true;
}

function iscloes() {
	$("#J_AgreementDialog2").hide();
}
//判断 密码
var ckpwd = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,20}$/;
var ckpwdtow = /^[^ ]+$/;

function ckpassword() {
	var pwd = $("#J_Password").val().trim();
	$("#J_MsgPassword").show();
	if(pwd.length<=0) {
		$("#J_MsgPassword-i").removeClass("icon-zhengque").addClass("icon-chucuo").css("color", "red");
		$("#J_MsgPassword-assertive").text("请输入密码");
		$("#J_Password").addClass("err-input");
		return false;
	}
	if(!ckpwd.test(pwd)) {
		$("#J_MsgPassword-i").removeClass("icon-zhengque").addClass("icon-chucuo").css("color", "red");
		$("#J_MsgPassword-assertive").text("设置密码不符合要求");
		$("#J_Password").addClass("err-input");
		return false;
	}
	//是否存在空格
	if(!ckpwdtow.test(pwd)) {
		
		$("#J_MsgPassword-i").removeClass("icon-zhengque").addClass("icon-chucuo").css("color", "red");
		$("#J_MsgPassword-assertive").text("设置密码不符合要求");
		$("#J_Password").addClass("err-input");
		return false;
	}
	
	$("#J_MsgPassword-assertive").text("");
	$("#J_MsgPassword-i").removeClass("icon-chucuo").addClass("icon-zhengque").css("color", "#7ac23c")
	$("#J_Password").removeClass("err-input");
	return true;
}
//第二次
function zaicPwd() {
	var pwd = $("#J_Password").val().trim();
	var p2 = $("#J_RePassword").val().trim();
	$("#J_MsgPassword-qr").show();
	if(p2 == "") {
		$("#J_MsgPassword-qr-i").removeClass("icon-zhengque").addClass("icon-chucuo").css("color", "red");
		$("#J_MsgPassword-assertive-qr").text("请输入确认密码");
		$("#J_RePassword").addClass("err-input");
		return false;
	}
	if(p2 != pwd) {

		$("#J_MsgPassword-qr-i").removeClass("icon-zhengque").addClass("icon-chucuo").css("color", "red");
		$("#J_MsgPassword-assertive-qr").text("两次输入密码不一致");
		$("#J_RePassword").addClass("err-input");
		return false;
	}
	$("#J_MsgPassword-assertive-qr").text("");
	$("#J_MsgPassword-qr-i").removeClass("icon-chucuo").addClass("icon-zhengque").css("color", "#7ac23c")
	$("#J_RePassword").removeClass("err-input");
	return true;
}
//等级判断
function grade() {
	//	
	//	$("#pw-rule-item1").find("span").css("color", "red");

	//	$("#pw-rule-item2").find("span").css("color", "red");
	//	$("#pw-rule-item2").find("i").removeClass("icon-weixuanzhongyuanquan").removeClass("icon-zhengque")
	//	   .addClass("icon-chucuo").css("color", "red");
	//	$("#pw-rule-item3").find("span").css("color", "red");
	//	$("#pw-rule-item3").find("i").removeClass("icon-weixuanzhongyuanquan").removeClass("icon-zhengque").addClass("icon-chucuo")
	//		.addClass("icon-chucuo").css("color", "red");
	var pwd = $("#J_Password").val();
	if(pwd == "") {
		myclass("#iconfont1");
		myclass("#iconfont2");
		myclass("#iconfont3");
		addmyclassNO("", "#pw-strength-1");
		addmyclassNO("", "#pw-strength-2");
		addmyclassNO("", "#pw-strength-3");
	} else {
		$(".pw-strength-bar em").text("弱");
		addmyclassYES("", "#pw-strength-1")
		///判断长度
		if(pwd.length >= 6 && pwd.length <= 20) {
			addmyclassYES("#iconfont1", "#pw-strength-2");
			$(".pw-strength-bar em").text("中");
		} else {
			addmyclassNO("#iconfont1", "#pw-strength-2");
		}
		//字符和数字
		var cknb = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{2,}$/;
		if(cknb.test(pwd)) {
			addmyclassYES("#iconfont3", "#pw-strength-1");
		} else {
			addmyclassNO("#iconfont3", "#pw-strength-3");
		}
		//判断是否包括空格
		if(ckpwdtow.test(pwd)) {
			addmyclassYES("#iconfont2", "#pw-strength-1");
		} else {
			addmyclassNO("#iconfont2", "#pw-strength-2");
			return;
		}

		//密码强度强
		var qian1 = /[0-9]+/;
		var qian2 = /[a-z]+/;
		var qian3 = /[A-Z]+/;
		//		var qian4=/['\"{}\\(\\)\\[\\]\\*&.?!,…:;]+/
		if(qian1.test(pwd) && qian2.test(pwd) && qian3.test(pwd)) {
			addmyclassYES("", "#pw-strength-3");
			$(".pw-strength-bar em").text("强");
		}
	}
}
//开始样式
function myclass(id) {
	$(id).removeClass("icon-chucuo").addClass("icon-weixuanzhongyuanquan").removeClass("icon-zhengque").css("color", "#9c9c9c");
}
//添加正确样式
function addmyclassYES(id1, id2) {
	$(id1).removeClass("icon-chucuo")
		.removeClass("icon-weixuanzhongyuanquan").addClass("icon-zhengque").css("color", "#7ac23c");
	$(id2).addClass("pw-strength-1ok");
}
//添加错误样式
function addmyclassNO(id1, id2) {
	$(id1).removeClass("icon-weixuanzhongyuanquan")
		.removeClass("icon-zhengque").addClass("icon-chucuo").css("color", "red");
	$(id2).removeClass("pw-strength-1ok");
}