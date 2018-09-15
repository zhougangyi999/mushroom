//懒加载延时
$("img").lazyload({
	effect: "fadeIn",
});

/*首页轮播方法*/
var index = 1;

function swipe() {
	if(index > 2) {
		index = 0;
	}
	$(".imgbox div").eq(index).addClass("active").siblings().removeClass("active");
	$(".control li").eq(index).addClass("active").siblings().removeClass("active");
	index++;
}

/*定时任务*/
setInterval(function() {
	swipe();
}, 2000)

//导航栏固定
$(function() {

	var nav = $("#bglist"); //得到导航对象

	var win = $(window); //得到窗口对象

	var sc = $(document); //得到document文档对象。

	win.scroll(function() {
		if(sc.scrollTop() >= 500) {
			nav.addClass("fix");
		} else {
			nav.removeClass("fix");
		}
	});
	win.scroll(function(){
		if(sc.scrollTop() >= 600&& sc.scrollTop() <= 1500){
			$("#bglist li:nth-child(1)").addClass("ons");
		}else{
			$("#bglist li:nth-child(1)").removeClass("ons");
		}
		if(sc.scrollTop() >= 1800&& sc.scrollTop() <= 3500){
			$("#bglist li:nth-child(2)").addClass("ons");
		}else{
			$("#bglist li:nth-child(2)").removeClass("ons");
		}
		if(sc.scrollTop() >= 4000&& sc.scrollTop() <= 5800){
			$("#bglist li:nth-child(3)").addClass("ons");
		}else{
			$("#bglist li:nth-child(3)").removeClass("ons");
		}
		if(sc.scrollTop() >= 5850&& sc.scrollTop() <= 8000){
			$("#bglist li:nth-child(4)").addClass("ons");
		}else{
			$("#bglist li:nth-child(4)").removeClass("ons");
		}
	})
});

//轮播图下方的快抢时间表 对应商品对应其时间
$(function() {
	var $shopList = $(".shoping-list").children();
	$(".times a").on("click", function() {
		var index = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		//匹配对应index的div显示与隐藏
		$shopList.eq(index).fadeIn("slow").siblings().fadeOut("slow");
	});
});