$(function() {
//	var countdown=60; 
//	function sendemail(){
//	var obj = $(".btn-sms-enable");
//	settime(obj);

//	}
//	function settime(obj) { //发送验证码倒计时
//	if (countdown == 0) { 
//	obj.attr('disabled',false); 
//	//obj.removeattr("disabled"); 
//	obj.val("免费获取验证码");
//	countdown = 60; 
//	return;
//	} else { 
//	obj.attr('disabled',true);
//	obj.val("重新发送(" + countdown + ")");
//	countdown--; 
//	} 
//	setTimeout(function() { 
//	settime(obj) }
//	,1000) 
//	}





	$(".mb_d,.mb_c").click(function() {
		$(".J_cardNoCheckTxt").focus();
	});
	/*输入卡号的下一步*/
	$(".J_cardNoCheckBtn").addClass("B_cardBtn").attr("disabled","true");
	$(".J_cardNoCheckBtn").click(function(){
		var l=$(".J_cardNoCheckTxt").val();
		var k=/^\d{15,19}$/;
		var card=/^([1-9]{1})(\d{14,18})$/;			/*卡号*/
		if(k.test(l)){
			if(card.test(l)){
				if(backcardCheck(l)){
					if(cardType=="CC"||cardType=="SCC"){
						$(".card_T").html("信用卡");
						$(".cardnoDis").html(l);
						$(".card_yan").show();
					}else{
						$(".card_T").html("储蓄卡");
						$(".cardnoDis").html(l);
						$(".card_yan").hide();
					}
					$(".mb_c .bank img").attr("src","https://apimg.alipay.com/combo.png?d=cashier&t="+backCode)
					$(".J_cardNoCheck,.pay_input").slideUp("fast");
					$(".pay_input,.main-wrap-form").slideDown("slow");
				}else{
					alert("错误")
				}
			}else{
				$(".zhe,.pay_warn").show();
				$(".pay_warn p:nth-child(2)").html("无法识别的银行卡，请核对银行卡信息");

			}
		}else{
			$(".zhe,.pay_warn").show();
			$(".pay_warn p:nth-child(2)").html("请输入正确的银行卡号");
		}
	});
	/*警告*/
	$(".chap").hover(function(){
		$(this).css({"transition":" 0.3s","transform":"rotate(90deg)"})
	},function(){
		$(this).css({"transition":"0.3s","transform":"rotate(0deg)"})
	})

	/*遮层关闭*/
	$(".close,.chap").click(function(){
		$(".pay_warn,.zhe").hide();
	});

	/*持卡人名验证*/

	function name_check(){
		var card_name=$(".cardHolderName").val();

		var name_bt=/^[\u4e00-\u9fa5]{0,}$/;
		if(name_bt.test(card_name)&&card_name!=''){
			$(".cardHolderName").next(".notice").hide();
			return true;
		}else{
			$(".cardHolderName").next(".notice").show().html("请输入正确的持卡人姓名");
			return false;
		}


	}
	$(".cardHolderName").blur(function() {
		name_check();
	})
	/*手机号验证*/

	function phone_check(){
		var phone_ch=$(".mobile").val();

		var phone=/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/;
		if(phone.test(phone_ch)){
			$(".mobile").next(".notice").hide();
			return true;
		}else{
			$(".mobile").next(".notice").show().html("请输入正确的手机号");
			return false;
		}


	}
	$(".mobile").blur(function() {
		phone_check();
	})
	/*短信验空*/

	function sm_check(){
		var sms_ch=$(".tsmall").val();

		if(sms_ch==""){
			$(".tsmall").next(".J_smscode").next(".notice").show().html("请输入正确的短信验证码");
			return false;
		}else{
			$(".tsmall").next(".J_smscode").next(".notice").hide();
			return true;
		}


	}
	$(".tsmall").blur(function(){sm_check();})
	/*卡验证码验空*/
	function card_check(){
		var cardcode=$(".card_code").val();
		if(cardcode==""){
			$(".card_code").next(".wen2").next(".notice").show().html("请输入卡验证码");
			return false;
		}else{
			$(".card_code").next(".wen2").next(".notice").hide();
			return true; 
		}
	}
	/*获取短信*/
	$(".J_smscode").click(function(){
		var ca_Type=$(".card_T").html();
		var certNo=$(".certNo").val();//身份证号
		var cardNo=$(".cardNo").val($(".cardnoDis").text());//银行卡号
		var cardHolderName = $(".cardHolderName").val();//姓名
		var sm=$(".tsmall").val();
		if(ca_Type=="储蓄卡"){
			
			if(name_check()){
				if(checkCard(certNo)==false){
					$(".certNo").next(".notice").show().html("请输入正确的身份证号");
				}else if(checkCard(certNo)==true){
					$(".certNo").next(".notice").hide();
					if(phone_check()){
						$(".J_smscode").attr("disabled","true").css("cursor","no-drop");
						$(".J_smscode").val("........");
						$.ajax({
							url     :"open_payment.josn",
							type    :"post",   //提交方式
							dataType:"JSON",   //回传的数据格式
							data    :{"mobile":$(".mobile").val(),"cardNo":$(".cardNo").val(),"certNo":certNo,"cardHolderName":cardHolderName},   //传到服务器的数据  ,"cardNo":cardNo
							success	:function(data){
								if(data.respMessage == "信息不匹配"){
									alert("您输入的信息不匹配！")
								}else{
									getSMS();
								}
							}
						});

					}
				}
			}
		}else if(ca_Type=="信用卡"){
			if(card_check()){
				if(name_check()){
					if(checkCard(certNo)==false){
						$(".certNo").next(".notice").show().html("请输入正确的身份证号");
					}else if(checkCard(certNo)==true){
						$(".certNo").next(".notice").hide();
						if(phone_check()){

						}
					}
				}
			}
		}
	});
	function getSMS(){

		/**
		 * 短信验证时间过渡
		 */
		var InterValObj; //timer变量，控制时间
		var count = 60; //间隔函数，1秒执行
		var curCount;//当前剩余秒数
		sentMessage()
		function sentMessage(){
			curCount=count;
			$(".J_smscode").attr("disabled","true").css("cursor","no-drop");
			$(".J_smscode").val("重新获取("+curCount+")");
			InterValObj = window.setInterval(SetRemainTime, 1000); // 启动计时器，1秒执行一次
		}

		function SetRemainTime() {
			if (curCount == 0) {                
				window.clearInterval(InterValObj);// 停止计时器
				$(".J_smscode").css("cursor","pointer").removeAttr("disabled");// 启用按钮
				$(".J_smscode").val("获取验证码");
				code = ""; // 清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
			}else {
				curCount--;
				$(".J_smscode").val("重新获取("+curCount+")");
			}
		}

	}
	if($("#agree").prop('checked')==false){
		$(".J_submit").attr("disabled",true);
	}
	/*立即开通*/
	$(".J_submit").click(function(){
		var ca_Type=$(".card_T").html();
		var certNo=$(".certNo").val();
		var sm=$(".tsmall").val();
		var cardNo=$(".cardNo").val($(".cardnoDis").text());//银行卡号
		var cardHolderName = $(".cardHolderName").val();//姓名
		var tsmall = $(".tsmall").val();
		if(sm_check()){
			$.ajax({
				url     :"backCrard.josn",
				type    :"post",   //提交方式
				dataType:"JSON",   //回传的数据格式
				data    :{"mobile":$(".mobile").val(),"cardNo":$(".cardNo").val(),"certNo":certNo,"cardHolderName":cardHolderName,"tsmall":tsmall},   //传到服务器的数据  ,"cardNo":cardNo
				success	:function(data){
					if(data.no == "no"){
						alert("请输入正确的验证码！");
					}else if(data.nulls == "null"){
						alert("验证码失效,请重新获取验证码!");
						$(".tsmall").val('');
					}else{
						if(data.respMessage == "信息匹配"){
							window.location.href="../transactionRecord/alipay_bill.html"
						}else{
							alert("请输入正确的信息！");
						}
					}
				}
			});





		}else if(ca_Type=="信用卡"){
			if(card_check()){
				if(name_check()){
					if(checkCard(certNo)==false){
						$(".certNo").next(".notice").show().html("请输入正确的身份证号");
					}else if(checkCard(certNo)==true){
						if(phone_check()){
							if(sm_check()){

							}
						}
					}
				}
			}
		}
	});

	/*年份添加*/
	function year() {
		var year = $("#birthday-year").html();
		for(var i = 14; i <= 25; i++) {
			var ye = "<option>" + i + "</option>";
			year += ye;
			$("#year").html(year);
		}
	}
	year();

	$(".wen2").hover(function(){
		$(".tishi2").show();
	},function(){
		$(".tishi2").hide();
	});
	$(".wen").hover(function(){
		$(".tishi").show();
	},function(){
		$(".tishi").hide();
	});







})

/*卡号处理*/
function hide_ca() {
		$(".J_cardNoCheckTxt,.mb_d,.mb_c").bind({
			"focus": function() {
				if($(".J_cardNoCheckTxt").val() != "") {
					$(".card_numtip").show();
				}
			},
			"blur": function() {
				$(".card_numtip").hide();
			}
		});
	}
	function is_card(cardnum){
		if(15<=cardnum.length&&cardnum.length<=19){
			$(".J_cardNoCheckBtn").removeAttr("disabled").addClass("F_cardBtn");
		}else{
			$(".J_cardNoCheckBtn").attr("disabled","true").removeClass("F_cardBtn");
		}
	}
	function card_check(cardnum) {
		if(cardnum != "") {
			var value = cardnum.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
			$(".card_numtip").show();
			value = value.substring(0, 23);
			$(".card_numtip").html(value);
			hide_ca();
			is_card(cardnum);
		} else {
			$(".card_numtip").hide();
		}
	}
