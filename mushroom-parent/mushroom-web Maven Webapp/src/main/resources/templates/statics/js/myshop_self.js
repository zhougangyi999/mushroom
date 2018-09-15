var path=$("#path").val();;
var comId=$("#comId").val();
var shopId=$("#shopId").val();
var num,color_type,size_type;
$(function(){
	function buy_info(){
		num=$(".num-input").val();    //购买的数量
		color_type=$(".J_StyleList").find(".c").attr("title");  
		size_type=$(".J_SizeList").find(".c").attr("title");
	}
/*	var count = document.getElementById("J_ModuleExtranav").getElementsByTagName("li").length;*/
 
	/*立即购买*/
	$("#J_BuyNow").click(function(){
		buy_info();
		
		if(color_type!=undefined&&size_type!=undefined){
			$.post(path+"/order/order.do",{"order_num":size_type,"reserved1":color_type,"item_num":num,"comId":comId},buyNow)
					
		}else{
			$("#J_GoodsSku").addClass("goods-pannel");
		}
	});
	function buyNow(data){
			
		 window.location.href=path+"/order/order.html";

		}
	/*加入购物车*/
	$(".buy-cart").click(function(){
		buy_info();
		if(color_type!=undefined&&size_type!=undefined){
			$.post(path+"/Order/order.do",
					{"order_num":size_type,"price_old":oldPrice,"price":nowPrice,"item_num":num,"order_img":color_img,"name":title,"reserved1":color_type})
		}else{
			$("#J_GoodsSku").addClass("goods-pannel");
		}

	});

	hot_look();
	function hot_look(){
		
		$.post(path+"/shop/myshop.do","comId="+comId+"&shopId="+shopId,backInfo);
	}
	function backInfo(data){
		
		$(".list .box ul").html("");
		$(".ui-bd .repeat-list").html("");
		for (var i = 0; i < data.Host_com.length; i++) {
			if(data.Host_com[i].discount==0){
				price=data.Host_com[i].prompt_price;
			}else{
				price=data.Host_com[i].prompt_price*data.Host_com[i].discount;
			}
			var host_info="<li>"+
			"<a href='"+path+"/shop/myshop.html/"+data.Host_com[i].commodity_id+"' target='_blank'> <img src='"+data.Host_com[i].main_img+"' width='120' data-indexs="+i+" data-iids="+data.Host_com[i].commodity_id+" class='loggered'> </a>"+
			"<div>￥"+price+"</div></li>";
			$(".list .box ul").append(host_info);
		}
		for (var j = 0; j < data.Look_com.length; j++) {
			if(data.Look_com[j].discount==0){
				price=data.Look_com[j].prompt_price;
				
			}else{
			
				price=(data.Look_com[j].prompt_price*data.Look_com[j].discount).toFixed(2);

			}
			var look_info="<li data-id="+data.Look_com[j].commodity_id+">"+
			"<a class='pic' href='"+path+"/shop/myshop.html/"+data.Look_com[j].commodity_id+"' target='_blank'> <img class='loggered lazy' data-original="+path+"/statics/img/lazyload.gif src="+data.Look_com[j].main_img+"_220x330.jpg data-indexs="+j+" style='display: block;'> </a>"+
			"<a class='title' href='"+path+"/shop/myshop.html/"+data.Look_com[j].commodity_id+"' target='_blank'>"+data.Look_com[j].title+"</a>"+
			"<div class='info'>"+
			"<div class='price'> <em class='price-u'>¥</em> <span class='price-n'>"+price+"</span> </div>"+
			"<div class='fav'> <em class='fav-i'></em> <span class='fav-n'>11</span> </div>"+
			"</div>"+
			"</li>";
			$(".ui-bd .repeat-list").append(look_info);
		}
		l();
		/*$("img.lazy").lazyload();*/
	}
	function l(){
		var com_id;
		$(".ui-bd .repeat-list .pic").click(function(){
			com_id=$(this).parent("li").attr("data-id");
			window.location.href=path+"/shop/myshop.html/"+com_id;
		})
		$(".list .box ul .loggered").click(function(){
			com_id=$(this).attr("data-iids");
			window.location.href=path+"/shop/myshop.html/"+com_id;
		})
	}

	/*窗口滑动*/
	function getScrollTop() {
		var scrollTop = 0;
		if(document.documentElement && document.documentElement.scrollTop) {
			scrollTop = document.documentElement.scrollTop;
		} else if(document.body) {
			scrollTop = document.body.scrollTop;
		}
		return scrollTop;
	}
	var one=0;
	$(window).scroll(function() {
		if(3000<getScrollTop()){
			if(one==0){
				look();
				++one;
			}
		}
	});
	function look(){
		var cateId=$("#cateId").val();
		$.post(path+"/shop/myshop_look.do","comId="+comId+"&shopId="+shopId+"&cateId="+cateId,lookInfo);
		}
	function lookInfo(data){
		$(".recommend-list ul").html("");
		for (var i = 0; i < data.length; i++) {
			if(data[i].discount==0){
				price=data[i].prompt_price;
			}else{
				price=(data[i].prompt_price*data[i].discount).toFixed(2);
			}
			var look_info="<li>"+
							"<a class='pic' href='"+path+"/shop/myshop.html/"+data[i].commodity_id+"' target='_blank'> <img class='lazy loggered' src="+data[i].main_img+"_220x330.jpg data-original='' data-iids="+data[i].commodity_id+" data-indexs="+i+" style='display: block;'> </a>"+
							"<a class='title' href='"+path+"/shop/myshop.html/"+data[i].commodity_id+"' target='_blank'>"+data[i].title+"</a>"+
							"<div class='info'>"+
							"<div class='price'> <em class='price-u'>¥</em> <span class='price-n'>"+price+"</span> </div>"+
							"<div class='fav'> <em class='fav-i'></em> <span class='fav-n'>59</span> </div>"+
							"</div></li>";
			$(".recommend-list ul").append(look_info);
		}
	}
})