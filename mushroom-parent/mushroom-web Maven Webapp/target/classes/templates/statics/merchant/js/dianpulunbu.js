

	
	
	
	
	

var i=0;//轮播图下标
var imgsout=true; 
var opl=0;
var  w=0;
var k=0;
var j=0;
var imgs=new Array( "img/dianpulunbu/lunbu1.jpg","img/dianpulunbu/TB2Fy17XhuI.eBjy0FdXXXgbVXa_!!1577613201.jpg","img/dianpulunbu/TB2OOS4XhaJ.eBjSsziXXaJ_XXa_!!1577613201.jpg");
//鼠标进入显示

//启动事假
$(document).ready(function(){
    w=$(".img-box>div").eq(i).width();
	$(".adver").mouseover(function(){
		$(".arrowLeft").show();
		$(".arrowRight").show();
		clearInterval(flay);
	});
	//鼠标离开隐藏
	$(".adver").mouseout(function(){
		$(".arrowLeft").hide();	
		$(".arrowRight").hide();
		 outFlay();
	});
	//鼠标左边点击
	$(".arrowLeft").click(function(){
		i=-2;
		if(opl==0)return;
		gogo();
	});
	//鼠标右边点击
	$(".arrowRight").click(function(){
		gogo();
	});
	$(".adver li").mouseover(function(){
		i=$(this).index();
		gogo();
		$(".adver li:nth-of-type("+(i)+")").css({"background":"orange"});//改变背景颜色
		$(".adver li:nth-of-type("+(i)+")").siblings().css({"background":"#333333"})
	});
	//鼠标进出增加css
	$(".div-ul1 li img").mouseenter(function(){
		$(this).addClass("imgimgss");	
	});
	//鼠标移除 清除css
	$(".div-ul1 li img").mouseleave(function(){
		$(this).removeClass("imgimgss");	
	});
	
	$(".shangping-ul li img").mouseenter(function(){
		$(this).addClass("imgimgss");	
	});
	//鼠标移除 清除css
	$(".shangping-ul li img").mouseleave(function(){
		$(this).removeClass("imgimgss");	
	});
});


//轮播函数
var flay=null;

function outFlay(){
	flay=setInterval(function(){
		gogo();
   },3000);
   
};
outFlay();
function gogo(){
	opl=$(".img-box").position().left;
	
	if (i>=3||i<0) {
		i=0;
	}
	$(".adver li").eq(i).css({"background":"orange"});//改变背景颜色
	$(".adver li").eq(i).siblings().css({"background":"#333333"});
	opl=w*i*-1;
	
	$(".img-box").animate({"left":opl+"px"},1000);
	i++;
}


