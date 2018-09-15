$(function(){
	getMyJson1(0);
	$(".cc-tree-ck").addClass("cc-tree-ckup").next().slideUp();
	$("#J_CatePubBtn").attr("disabled",true); 
	
	
	
//	$(this).next().slideUp();
});
//点击三级菜单
function Three_level_menu(){
	$(".menu3").click(function(){
		$("#J_CatePubBtn").attr("disabled",false);
		$("#FId").val($(this).attr("title"));
	})
}

//点击二级菜单
//function Three_level_menu2(){
//	$("#TId").val($(this).attr("title"));
//	alert($("#TId").val());
//}

//点击
function cc_tree_ck(){
	$(".cc-tree-ck").toggle(
		function(){
	    	$(this).removeClass("cc-tree-ckup").next().slideDown();
	    	$("#wId").val($(this).attr("title"));//一级隐藏id
	    	getlist2($(this).attr("title"),this,"");
		},
		function(){
			$(this).addClass("cc-tree-ckup").next().slideUp();
		}
	);
	
}
//
function getMyJson1(names){
	$.ajax({
		//提交路径
			url     :"business/category.json",
			type    :"post",   //提交方式
			dataType:"JSON",   //回传的数据格式
			data    :"categoryId="+names,   //传到服务器的数据  
			//等同于
			success :getList1 , //提交成功后执行的方法
			complete:cc_tree_ck      //不管是否都执行
	});
};
function getList1(data){
	$(data.data).each(function(i){
		$("#getEMainsortList").append(
					"<li class='cc-tree-group'>"+
						"<div class='cc-tree-ck' title='"+this.categoryId+"' >"+this.name+"</div>"+
						"<ul class='cc-tree-group-intm' 'lsit"+i+"'></ul></li>"	
		);
	});
};
//获得2级分类
function getlist2(id,i){
	$.getJSON("business/category.json","categoryId="+id,
			function getList2(data){
				$(data.data).each(function(){
					$(i).next().append("<li class='threesortList' title='"+this.categoryId+"'>"+this.name+"</li>");
				});
				//获得三级分类
				$(".threesortList").click(function(){	
					$("#brand_li").hide();
					$("#three_li").show();
					$("#three_ul").text("");
					$("#TId").val($(this).attr("title"));//二级隐藏id
					if($(this).attr("title")=="")return;
					
					$.ajax({
						//提交路径
							url     :"business/category.json",
							type    :"post",   //提交方式
							dataType:"JSON",   //回传的数据格式
							data    :"categoryId="+$(this).attr("title"),   //传到服务器的数据  
							//等同于
							success :getList2 , //提交成功后执行的方法
							complete:Three_level_menu      //不管是否都执行
					});
					
					
//					$.getJSON("business/category.json","categoryId="+$(this).attr("title"),
							function getList2(data){
								$(data.data).each(function(){	
									$("#three_ul").append("<li class='menu3' title='"+this.categoryId+"' >"+this.name+"</li>");
								});
								//获得对应品牌
//								$.getJSON("servlet/Issue","opr=brand&"+"sorId="+$(this).attr("title")+"names="+names,
//										function brand(){
//											
//										});
							}; 
				});		
	});
}




