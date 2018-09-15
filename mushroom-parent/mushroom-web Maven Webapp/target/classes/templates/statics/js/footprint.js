$(function(){
	//点击收藏的店铺
	$(".fst").click(function(){
		$("#footprint1").css("display","block");
		$(".footprint3").css("display","none");
		$(".footprint2").css("display","none");
		$(this).addClass("on").siblings().removeClass("on");
	});
	$("#shangping").click(function(){
		$(".footprint3").css("display","none");
		$(".footprint2").css("display","block");
		$("#footprint1").css("display","none");
		$(this).addClass("on").siblings().removeClass("on");
		
	});
	$("#zujie").click(function(){
		$(".footprint3").css("display","block");
		$(".footprint2").css("display","none");
		$("#footprint1").css("display","none");
		$(this).addClass("on").siblings().removeClass("on");
	});
	
});
			