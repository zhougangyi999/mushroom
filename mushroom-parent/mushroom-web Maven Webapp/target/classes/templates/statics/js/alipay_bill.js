var page;//分页page
$(function() {
	alipay();//一加载就执行ajax
	$("#bankinfo").hide();
	//点击财富中心
	$(".caifu").click(function() {
		$("#sss").hide();
		$(".money2").hide();
		$("#table1").html("");
		$("#bankinfo").show();
		var htmls = "";
		$.ajax({
			url     :"caifuzhongxin.json",
			type    :"GET",   //提交方式
			dataType:"JSON",   //回传的数据格式
			data	:{"userId":$("#userId").val()},
			success :function(data){
				$(data.list).each(function(){
					htmls+="<tr><td style='width:20%' class='td'>"+this.cardNumber.substr(0,4)+"**********"+this.cardNumber.substr(15)+"</td>"+
					"<td style='width:20% '>"+this.bankName+"</td>"+
					"<td style='width:30% '>"+this.cardName+"</td>"+
					"<td style='width:10% '>"+this.user.phone.substr(0,3)+"****"+this.user.phone.substr(7)+"</td>"+
					"<td style='width:30% '>"+this.user.identity.substr(0,1)+"**************"+this.user.identity.substr(17)+"</td></tr>";
				})
				$("#table1").html(htmls);
			}
		});
	})
	
	
	
	
	
	//上一页
	$("#aPrePage").click(function(){
		bill(page.currPageNo-1);
	});
	//下一页
	$("#aNextPage").click(function(){
		bill(page.currPageNo+1);
	})
	//时间失焦事件
	$("#time").blur(function() {
		var time = $("#time").val();
		var time2 = $("#time2").val();
		if(time == null || time == ""){
			alert('请选择正确的时间');
		}
		if(time2 != null && time2 != "" && time != null && time != ""){
			if(time > time2){
				alert("起始时间不能超过截止时间");
				$("#time").val('')
			}
		}
	});
	$("#time2").blur(function() {
		var time2 = $("#time2").val();
		var time = $("#time").val();
		if(time2 == null || time2 == ''){
			alert('请选择正确的时间!');
		}else{
			if(time > time2){
				alert("起始时间不能超过截止时间!");
			}
		}
	});
	
	$("#btn2").click(function() {
		var time2 = $("#time2").val();
		var time = $("#time").val();
		if(time != null  &&  time2 == ""){
			alert("请输入截止时间");
			return;
		}else if(time2 != null  &&  time == ''){
			alert("请输入开始时间!");
			return;
		}else{
			alipay()
		}
	});
	
    
      
    //点击今天
	$(".today").click(function() {
		$("#time2").val('');
		$("#time").val('')
		var now = new Date();  
		var year = now.getFullYear();       //年  
	    var month = now.getMonth() + 1;     //月  
	    var day = now.getDate();            //日
		$("#hiddenDay").val(year+"-"+month+"-"+day)
		alipay();
	})
	//点击一个月
	$(".one").click(function() {
		$("#time2").val('');
		$("#time").val('')
		var now = new Date();  
		now.setMonth(now.getMonth()-1);
		var year = now.getFullYear();       //年  
	    var month = now.getMonth() + 1;     //月  
	    var day = now.getDate();            //日
		$("#hiddenDay").val(year+"-"+month+"-"+day);
		alipay();
	})
	//点击三个月
	$(".thess").click(function() {
		$("#time2").val('');
		$("#time").val('')
		var now = new Date();  
		now.setMonth(now.getMonth()-3);
		var year = now.getFullYear();       //年  
	    var month = now.getMonth() + 1;     //月  
	    var day = now.getDate();            //日
		$("#hiddenDay").val(year+"-"+month+"-"+day);
		alipay();
	})
	//点击半年
	$(".bannian").click(function() {
		$("#time2").val('');
		$("#time").val('');
		var now = new Date();  
		now.setMonth(now.getMonth()-6);
		var year = now.getFullYear();       //年  
	    var month = now.getMonth() + 1;     //月  
	    var day = now.getDate();            //日
		$("#hiddenDay").val(year+"-"+month+"-"+day);
		alipay();
	});
	$(".ul li a").click(function() {
		$("#time2").val('');
		$("#time").val('')
	})
});
function alipay_bill(data) {
	page=data.page;
    $("#table").html("");
    var htmls="";
	$(data.list).each(function(){
		htmls+="<tr><td>"+this.creation_time+"</td>"+
			"<td>"+this.name+"</td>"+
			"<td>"+this.money+"</td><td style='color: red;'>";
			if(this.status==1){
				htmls+="交易成功";
			}else{
				htmls+="交易审核中";
			}
		htmls+="</td>";
		htmls+="<td><a>查看详情</a></td></tr>";
	})
	$("#table").html(htmls);
}
function bill(currPageNo) {
	$.getJSON("alipay_bill.json",{"pageIndex":currPageNo,"time":$("#time").val(),"time2":$("#time2").val(),"time3":$("#hiddenDay").val()},alipay_bill);
}
function alipay() {
	$.ajax({
		url     :"alipay_bill.json",
		type    :"GET",   //提交方式
		dataType:"JSON",   //回传的数据格式
		data    :{"pageIndex":$("#pageIndex").val(),"time":$("#time").val(),"time2":$("#time2").val(),"time3":$("#hiddenDay").val()},   //传到服务器的数据  
		success :alipay_bill
	})
}
function alipay2() {
	$.ajax({
		url     :"alipay_bill.json",
		type    :"GET",   //提交方式
		dataType:"JSON",   //回传的数据格式
		data    :{"pageIndex":$("#pageIndex").val(),"time3":$("#hiddenDay").val()},   //传到服务器的数据  
		success :alipay_bill
	})
}
function caifu() {
	
}
