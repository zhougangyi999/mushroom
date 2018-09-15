$(function(){
	$(".new_pwd").bind({"focus":function(){
		$(".formpwd .error").show().html("请输入6-18位字母、数字、特殊字符");
		
	},"blur":function(){
		$(".formpwd .error").hide().html("");
	}});
	
	$(".ui-input").focus(function(){
		$(".lg_chk_wrap .error").hide();
	})
	/*输入登录名的下一步*/
	$("#modelform .btn_check").click(function(){
		var userName=$(".ui-input").val();
		if(userName==''){
			$(".lg_chk_wrap .error").html("请输入手机号").show();
		}else{
			$.post("/tidefashion-web/user/forPw/upForPwd.do","userName="+userName,backStatus);
			
			function backStatus(data){
				if(data.result){
					$(".formbox").hide();
					$(".check_formbox").show();
					var myphone = data.phone.substr(3, 5);
					var lphone = userName.replace(myphone, "*****");
					$(".red_txt").html(lphone);
					sms(data.phone);
				}else{
					if(data.phoneEr!=undefined){
						$(".lg_chk_wrap .error").html(data.phoneEr).show();
					}
					if(data.nameEr!=undefined){
						$(".lg_chk_wrap .error").html(data.nameEr).show();
					}
					
				}
			}
		}
		
	})
	var InterValObj; //timer变量，控制时间
	var count = 60; //间隔函数，1秒执行
	var curCount;//当前剩余秒数
	function sms(phoneNum){
		sentMessage();
	
		/*获取短信验证码*/
		$(".js_getcheck").click(function(){
			
			$.getJSON("/tidefashion-web/user/forPw/sendSms","phone="+phoneNum);
			sentMessage();
		})
		
		/**
		 * 短信验证时间过渡
		 */
		function sentMessage(){
			curCount=count;
			$(".js_getcheck").attr("disabled","true").css("cursor","no-drop");
			$(".js_getcheck").val("重新获取("+curCount+")");
			InterValObj = window.setInterval(SetRemainTime, 1000); // 启动计时器，1秒执行一次
		}

		function SetRemainTime() {
			
			if (curCount == 0) {                
				window.clearInterval(InterValObj);// 停止计时器
				$(".js_getcheck").css("cursor","pointer").removeAttr("disabled");// 启用按钮
				$(".js_getcheck").val("获取验证码");
				code = ""; // 清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
			}else {
				curCount--;
				$(".js_getcheck").val("重新获取("+curCount+")");
			}
		}
	}
	
	$(".check_formbox .btn_check").click(function(){
		var phoneCode=$(".js_phone").val();
		$.post("/tidefashion-web/user/forPw/checkCode.do","Code="+phoneCode,backCode);
		function backCode(data){
			if(data){
				$(".check_formbox").hide();
				$(".again_pwd").show();
			}else{
				$(".check_formbox .error").html("验证码输入有误!").show();
			}
		}
	})
	
	$(".ok_pwd").click(function(){
		var newPwd=$(".new_pwd").val();
		var againPwd=$(".new_pwd_again").val();
		if(newPwd!=againPwd){
			$(".again_error").html("两次输入的密码不一致").show();
		}else{
			$.post("/tidefashion-web/user/forPw/upPwd.do","newPwd="+newPwd+"&agaPwd="+againPwd,backUp);
			function backUp(data){
				if(data.result){
					k();
				}else{
					if(data.pwdLike!=undefined){
						$(".again_pwd .error").html(data.pwdLike).show();
					}
					if(data.twoLike!=undefined){
						$(".again_pwd .again_error").html(data.twoLike).show();
					}
				}
			}
		}
	})
	
	function k(){
		var InterValObU,curCountU,counts=3;

		curCountU=counts;
		$(".again_pwd p").html("修改成功,"+curCountU+"后自动跳到登录页面!");
		InterValObU = window.setInterval(function SetTime(){
			if (curCountU == 0) {                
				window.clearInterval(InterValObU);// 停止计时器
				$(".again_pwd p").html("");
				window.location.href="/tidefashion-web/user/login";
				code = ""; // 清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
			}else {
				curCountU--;
				$(".again_pwd p").html("修改成功,"+curCountU+"后自动跳到登录页面!");
			}
		}, 1000); // 启动计时器，1秒执行一次
	}
})
/*检验密码强度*/
function pwdLengthStrong(pwd){
		var k=pwStrength(pwd);
		if(k==1){
			$(".strong_pwd").removeClass("Pwdstrong_1");
			$(".strong_pwd").removeClass("Pwdstrong_2");
			$(".strong_pwd").removeClass("Pwdstrong_3");
		}else if(k==2){
			$(".strong_pwd").addClass("Pwdstrong_1");
			$(".strong_pwd").removeClass("Pwdstrong_2");
		}else if(k==3){
			$(".strong_pwd").addClass("Pwdstrong_2");
			$(".strong_pwd").removeClass("Pwdstrong_3");
		}else if(k==4){
			$(".strong_pwd").addClass("Pwdstrong_3");
		}
	}