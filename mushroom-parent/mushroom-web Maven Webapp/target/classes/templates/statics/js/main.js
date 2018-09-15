$(function(){
	
	$(".ts_btn").click(function(){
		if($(".ts_txt").val()!=''){
			
			$("#top_nav_form").submit();
		}
	})
	var i=0,j=0,k=0,w=0,p=0,v=0,t=0,path;
	var little_01,little_02,little_03,little_04,little_05,little_06,little_07,little_08;
	path=$("#path").val();
	/*页面加载数据*/
	loadPageInfo()
	function loadPageInfo(){
		$.post(path+"/main/index.do","num=1",lun_01_info);
		$.post(path+"/main/index.do","num=2",lun_02_info);
		$.post(path+"/main/index.do","num=3",lun_03_info);
		$.post(path+"/main/index.do","num=4",lun_04_info);
		change_1(5);
		change_1(9);
		
	}
	function lun_01_info(data){
		for (var i = 4; i <= data.length; i+=4) {
			for (var j = i-4; j < i; j++) {
				var lowPrice=data[j].prompt_price*data[j].grabList[0].qdiscount;
				$("#lb1").attr('href',path+"/shop/myshop.html/"+data[j].commodity_id);
				little_01="<div class='fl item-box' data-log-index="+j+" serial-number="+data[j].commodity_id+">"+
				"<a rel='nofollow' class='goods-image J_dynamic_imagebox' href='"+path+"/shop/myshop.html/"+data[j].commodity_id+"' serial-number="+data[j].commodity_id+"img-src='https://s3.mogucdn.com/mlcdn/c45406/180531_73dhc1ghhh9fhfhb7e2e55hika6cg_640x960.jpg' target='_blank'>"+
				"<img class='J_dynamic_img fill_img' src='"+data[j].main_img+"' alt=''></a>"+
				"<a class='goods-title' serial-number="+data[j].commodity_id+" href='"+path+"/main/myshop.html?id="+data[j].commodity_id+"' target='_blank'>"+data[j].title+"</a>"+
				"<div class='goods-price'> <em>¥"+lowPrice.toFixed(2)+"</em> <del>¥"+data[j].prompt_price+"</del> </div></div>";
				$(".preload_box_"+((i/4)-1)).append(little_01);
				
			}
		}
	}
	function lun_02_info(data){
		for (var i = 4; i <= data.length; i+=4) {
			$("#pc_lun_02 .mslide_banner").eq(((i/4)-1)).html("");
			for (var j = i-4; j < i; j++) {
				$("#lb2").attr('href',path+"/shop/myshop.html/"+data[j].commodity_id);
				little_02="<div class='swiper-item fl'>"+
				"<a href='"+path+"/shop/myshop.html/"+data[j].commodity_id+"' class='' data-log-index="+j+" target='_blank' serial-number="+data[j].commodity_id+">"+
				"<div class='swiper-img-wrap J_dynamic_imagebox ' img-src='http://s3.mogucdn.com/mlcdn/55cf19/180427_1563796618bc8kj855lk7a70b5a29_640x960.jpg'>"+
				"<img class=J_dynamic_img fill_img' src='"+data[j].main_img+"' alt=''></div>"+
				"<p class='swiper-item-title'>"+data[j].title+"</p>"+
				"<p class='swiper-item-price'> <span>¥</span>"+data[j].prompt_price+"</p></a></div>";
				$("#pc_lun_02 .mslide_banner").eq(((i/4)-1)).append(little_02);
			}
		}
	}
	function lun_03_info(data){

		for (var i = 6; i <= data.length; i+=6) {
			$("#pc_lun_03 .mslide_banner").eq(((i/6)-1)).html("");
			for (var j = i-6; j < i; j++) {
				little_03="<div class='swiper-item fl'>"+
				"<a href='"+path+"/shop/myshop.html/"+data[j].commodity_id+"' class='' data-log-index="+j+" target='_blank' serial-number="+data[j].commodity_id+">"+
				"<div class='swiper-img-wrap J_dynamic_imagebox ' img-src='http://s3.mogucdn.com/mlcdn/55cf19/180427_1563796618bc8kj855lk7a70b5a29_640x960.jpg'>"+
				"<img class=J_dynamic_img fill_img' src='"+data[j].main_img+"' alt=''></div>"+
				"<p class='swiper-item-title'>"+data[j].title+"</p>"+
				"<p class='swiper-item-price'> <span>¥</span>"+data[j].prompt_price+"</p></a></div>";
				$("#pc_lun_03 .mslide_banner").eq(((i/6)-1)).append(little_03);
			}
		}
	}
	function lun_04_info(data){

		for (var i = 6; i <= data.length; i+=6) {
			$("#pc_lun_04 .mslide_banner").eq(((i/6)-1)).html("");
			for (var j = i-6; j < i; j++) {
				little_04="<div class='swiper-item fl'>"+
				"<a href='"+path+"/shop/myshop.html/"+data[j].commodity_id+"' class='' data-log-index="+j+" target='_blank' serial-number="+data[j].commodity_id+">"+
				"<div class='swiper-img-wrap J_dynamic_imagebox ' img-src='http://s3.mogucdn.com/mlcdn/55cf19/180427_1563796618bc8kj855lk7a70b5a29_640x960.jpg'>"+
				"<img class=J_dynamic_img fill_img' src='"+data[j].main_img+"' alt=''></div>"+
				"<p class='swiper-item-title'>"+data[j].title+"</p>"+
				"<p class='swiper-item-price'> <span>¥</span>"+data[j].prompt_price+"</p></a></div>";
				$("#pc_lun_04 .mslide_banner").eq(((i/6)-1)).append(little_04);
			}
		}
	}
	
	function lun_05_info(data){

		for (var i = 6; i <= data.length; i+=6) {
			$("#pc_lun_05 .mslide_banner").eq(((i/6)-1)).html("")
			for (var j = i-6; j < i; j++) {
				little_05="<div class='swiper-item fl'>"+
				"<a href='"+path+"/shop/myshop.html/"+data[j].commodity_id+"' class='' data-log-index="+j+" target='_blank' serial-number="+data[j].commodity_id+">"+
				"<div class='swiper-img-wrap J_dynamic_imagebox ' img-src='http://s3.mogucdn.com/mlcdn/55cf19/180427_1563796618bc8kj855lk7a70b5a29_640x960.jpg'>"+
				"<img class=J_dynamic_img fill_img' src='"+data[j].main_img+"' alt=''></div>"+
				"<p class='swiper-item-title'>"+data[j].title+"</p>"+
				"<p class='swiper-item-price'> <span>¥</span>"+data[j].prompt_price+"</p></a></div>";
				$("#pc_lun_05 .mslide_banner").eq(((i/6)-1)).append(little_05);

			}
		}
	}
	function lun_06_info(data){

		for (var i = 6; i <= data.length; i+=6) {
			$("#pc_lun_06 .mslide_banner").eq(((i/6)-1)).html("");
			for (var j = i-6; j < i; j++) {
				little_06="<div class='swiper-item fl'>"+
				"<a href='"+path+"/shop/myshop.html/"+data[j].commodity_id+"' class='' data-log-index="+j+" target='_blank' serial-number="+data[j].commodity_id+">"+
				"<div class='swiper-img-wrap J_dynamic_imagebox ' img-src='http://s3.mogucdn.com/mlcdn/55cf19/180427_1563796618bc8kj855lk7a70b5a29_640x960.jpg'>"+
				"<img class=J_dynamic_img fill_img' src='"+data[j].main_img+"' alt=''></div>"+
				"<p class='swiper-item-title'>"+data[j].title+"</p>"+
				"<p class='swiper-item-price'> <span>¥</span>"+data[j].prompt_price+"</p></a></div>";
				$("#pc_lun_06 .mslide_banner").eq(((i/6)-1)).append(little_06);
			}
		}
	}
	function lun_07_info(data){

		for (var i = 6; i <= data.length; i+=6) {
			$("#pc_lun_07 .mslide_banner").eq(((i/6)-1)).html("");
			for (var j = i-6; j < i; j++) {
				little_07="<div class='swiper-item fl'>"+
				"<a href='"+path+"/shop/myshop.html/"+data[j].commodity_id+"' class='' data-log-index="+j+" target='_blank' serial-number="+data[j].commodity_id+">"+
				"<div class='swiper-img-wrap J_dynamic_imagebox ' img-src='http://s3.mogucdn.com/mlcdn/55cf19/180427_1563796618bc8kj855lk7a70b5a29_640x960.jpg'>"+
				"<img class=J_dynamic_img fill_img' src='"+data[j].main_img+"' alt=''></div>"+
				"<p class='swiper-item-title'>"+data[j].title+"</p>"+
				"<p class='swiper-item-price'> <span>¥</span>"+data[j].prompt_price+"</p></a></div>";
				$("#pc_lun_07 .mslide_banner").eq(((i/6)-1)).append(little_07);
			}
		}
	}
	function lun_08_info(data){
		for (var i = 6; i <= data.length; i+=6) {
			$("#pc_lun_08 .mslide_banner").eq(((i/6)-1)).html("");
			for (var j = i-6; j < i; j++) {
				little_08="<div class='swiper-item fl'>"+
				"<a href='"+path+"/shop/myshop.html/"+data[j].commodity_id+"' class='' data-log-index="+j+" target='_blank' serial-number="+data[j].commodity_id+">"+
				"<div class='swiper-img-wrap J_dynamic_imagebox ' img-src='http://s3.mogucdn.com/mlcdn/55cf19/180427_1563796618bc8kj855lk7a70b5a29_640x960.jpg'>"+
				"<img class=J_dynamic_img fill_img' src='"+data[j].main_img+"' alt=''></div>"+
				"<p class='swiper-item-title'>"+data[j].title+"</p>"+
				"<p class='swiper-item-price'> <span>¥</span>"+data[j].prompt_price+"</p></a></div>";
				$("#pc_lun_08 .mslide_banner").eq(((i/6)-1)).append(little_08);
			}
		}
	}
	var mix,mix_lay;
	function info_mix(data){
		$("#J_scroll_wallbox").html("");
		for (var k = 40; k <= data.length; k+=40) {
			mix_lay="<div class='goods_list_mod clearfix J_mod_show' id='J_Dynmod_wh37sdx4_"+((k/40)-1)+"' style='height: 3200px;'></div>";
			$("#J_scroll_wallbox").append(mix_lay);
			for(var i=5;i<=k;i+=5){
				for (var j = i-5; j < i; j++) {
					mix="<div class='iwf goods_item' goods-index="+j+">"+
					"<a class='likeLink yahei' href='javascript:;' target='_blank'>找相似</a>"+
					"<a rel='nofollow' href='"+path+"/shop/myshop.html/"+data[j].commodity_id+"' class='img J_dynamic_imagebox ' target='_blank' need-remove='no' serial-number="+data[j].commodity_id+">"+
					"<img class='J_dynamic_img fill_img lazy' src="+path+"/statics/img/lazyload.gif data-original="+data[j].main_img+" alt='' style=''></a>"+
					"<a rel='nofollow' target='_blank' href='"+path+"/shop/myshop.html/"+data[j].commodity_id+"' class='goods_info_container' serial-number="+data[j].commodity_id+">"+
					"<p class='title yahei fl' style='height:40px;margin-bottom:3px'>"+data[j].title+"</p>"+
					"<div class='goods_info fl'><b class='price_info yahei'>¥89.6</b>"+
					"<p class='org_price fl yahei'>¥&nbsp;<span>"+data[j].prompt_price+"</span></p><span class='fav_num fr'><img src='//s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png' alt=''>138</span></div>"+
					"</a></div>";
					$("#J_Dynmod_wh37sdx4_"+((k/40)-1)).append(mix);

				}

			}
		}
		$("img.lazy").lazyload();
	}

	/*换一换*/
	var page;
	function change_1(ch_num){
		if(ch_num==5){
			page=$(".bg-white").eq(0).children(".page").val();
			$.post(path+"/main/index_4.do","num="+ch_num+"&pageIndex="+page,change_01_info);
		}else if(ch_num==9){
			page=$(".bg-white").eq(1).children(".page").val();
			$.post(path+"/main/index_4.do","num="+ch_num+"&pageIndex="+page,change_02_info);
		}else if(ch_num==10){
			page=$(".bg-white").eq(2).children(".page").val();
			$.post(path+"/main/index_4.do","num="+ch_num+"&pageIndex="+page,change_03_info);
		}else if(ch_num==8){
			page=$(".bg-white").eq(3).children(".page").val();
			$.post(path+"/main/index_4.do","num="+ch_num+"&pageIndex="+page,change_04_info);
		}else if(ch_num==15){
			page=$(".bg-white").eq(4).children(".page").val();
			$.post(path+"/main/index_4.do","num="+ch_num+"&pageIndex="+page,change_05_info);
		}else if(ch_num==11){
			page=$(".bg-white").eq(5).children(".page").val();
			$.post(path+"/main/index_4.do","num="+ch_num+"&pageIndex="+page,change_06_info);
		}
		
	}
	function change_01_info(data){
		
		$(".bg-white").eq(0).children(".page").val(data.pageSize);
		sent_info(data,0);
	}
	function change_02_info(data){
		$(".bg-white").eq(1).children(".page").val(data.pageSize);
		sent_info(data,1);
	}
	function change_03_info(data){
		$(".bg-white").eq(2).children(".page").val(data.pageSize);
		sent_info(data,2);
	}
	function change_04_info(data){
		$(".bg-white").eq(3).children(".page").val(data.pageSize);
		sent_info(data,3);
	}
	function change_05_info(data){
		$(".bg-white").eq(4).children(".page").val(data.pageSize);
		sent_info(data,4);
	}
	function change_06_info(data){
		$(".bg-white").eq(5).children(".page").val(data.pageSize);
		sent_info(data,5);
	}
	function sent_info(data,num){
		$(".bg-white").eq(num).children("a").remove();
		for (var i = 0; i < data.listInfo.length; i++) {
			var shoe_ch="<a class='right-goods-item clearfix ' href='"+path+"/shop/myshop.html/"+data.listInfo[i].commodity_id+"' target='_blank' serial-number="+i+" data-log-iid="+data.listInfo[i].commodity_id+">"+
						"<div class='J_dynamic_imagebox right-goods-img fl ' ><img class='J_dynamic_img fill_img lazy' src="+path+"/statics/img/lazyload.gif data-original="+data.listInfo[i].main_img+" alt=''></div>"+
						"<div class='goods-info fl'>"+
						"<p class=' goods-info-title'>"+data.listInfo[i].title+"</p>"+
						"<p class='goods-info-price'><span>¥</span>"+data.listInfo[i].prompt_price+"</p>"+
						"</div></a>";
			$(".bg-white").eq(num).append(shoe_ch);
		}
		$("img.lazy").lazyload();
	}

	$(".bg-white:eq(0) .turn-next").click(function(){
		page=$(".bg-white").eq(0).children(".page").val();
		$(".bg-white").eq(0).children(".page").val(parseInt(page)+1);
		change_1(5);
	});
	$(".bg-white:eq(1) .turn-next").click(function(){
		page=$(".bg-white").eq(1).children(".page").val();
		$(".bg-white").eq(1).children(".page").val(parseInt(page)+1);
		change_1(9);
	});
	$(".bg-white:eq(2) .turn-next").click(function(){
		page=$(".bg-white").eq(2).children(".page").val();
		$(".bg-white").eq(2).children(".page").val(parseInt(page)+1);
		change_1(10);
	});
	$(".bg-white:eq(3) .turn-next").click(function(){
		page=$(".bg-white").eq(3).children(".page").val();
		$(".bg-white").eq(3).children(".page").val(parseInt(page)+1);
		change_1(8);
	});
	$(".bg-white:eq(4) .turn-next").click(function(){
		page=$(".bg-white").eq(4).children(".page").val();
		$(".bg-white").eq(4).children(".page").val(parseInt(page)+1);
		change_1(15);
	});
	$(".bg-white:eq(5) .turn-next").click(function(){
		page=$(".bg-white").eq(5).children(".page").val();
		$(".bg-white").eq(5).children(".page").val(parseInt(page)+1);
		change_1(11);
	});
	
	
	/*function change_2(){
		$.post(path+"/main/index_4.do","num=5",change_02_info);
	}
	function change_02_info(data){
		$(".bg-white").eq(1).children("a").remove();
		for (var i = 0; i < data.length; i++) {
			var shoe_ch="<a class='right-goods-item clearfix ' href='javascript:;' target='_blank' serial-number="+i+" data-log-iid="+data[i].commodity_id+">"+
						"<div class='J_dynamic_imagebox right-goods-img fl ' ><img class='J_dynamic_img fill_img lazy' src='statics/img/lazyload.gif' data-original="+data[i].main_img+" alt=''></div>"+
						"<div class='goods-info fl'>"+
						"<p class=' goods-info-title'>"+data[i].title+"</p>"+
						"<p class='goods-info-price'><span>¥</span>"+data[i].prompt_price+"</p>"+
						"</div></a>";
			$(".bg-white").eq(1).append(shoe_ch);
		}
		$("img.lazy").lazyload();
	}
	$(".bg-white:eq(1) .turn-next").click(function(){
		change_2();
	})*/









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
	var only=0 ,guess=0;
	ko();
	function ko(){
		if(1500<getScrollTop()&& getScrollTop()<= 5600){
			if(only==0){
				$.post(path+"/main/index_2.do","num=5",lun_05_info);
				$.post(path+"/main/index_2.do","num=6",lun_06_info);
				$.post(path+"/main/index_2.do","num=7",lun_07_info);
				$.post(path+"/main/index_2.do","num=8",lun_08_info);
				change_1(10);
				change_1(8);
				change_1(15);
				change_1(11);
				only++;
			}
		}

		if(4500<getScrollTop()){
			if(guess==0){
				$.post(path+"/main/index_3.do",info_mix);
				guess++;
			}
		}

		if(getScrollTop() > 500) {
			$("#J_sticky_container").show();
		} else {
			$("#J_sticky_container").hide();
		}
	}
	$(window).scroll(function() {
		ko();
	});
	$(".search_nav_menu").hover(function(){
		$("#float_nav_menu").show();
	},function(){
		$("#float_nav_menu").hide();
	})
	$("#float_nav_menu").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})	




	/*轮播*/
	autoplay();
	function autoplay(){
		play=setInterval(function(){
			if(i>0){
				i=-1;
			}
			++i;
			if(i==0){
				$(".MCUBE_MOD_ID_248606").css("background-color","rgb(234, 84, 255)");
			}else{
				$(".MCUBE_MOD_ID_248606").css("background-color","#7ae6ff");
			}

			$("#pc_banner_top .anim_mslide_dot_box a").eq(i).addClass("dot_show").siblings().removeClass("dot_show");
		},5000)
	}

	$(".anim_mslide_dot_box a").hover(function(){
		clearInterval(play);
		if($(this).index()==0){
			$(".MCUBE_MOD_ID_248606").css("background-color","rgb(234, 84, 255)");
		}else{
			$(".MCUBE_MOD_ID_248606").css("background-color","#7ae6ff");
		}
		$("#pc_banner_top .mslide_banner").eq($(this).index()).addClass("layui-this").siblings().removeClass("layui-this");
		$("#pc_banner_top .anim_mslide_dot_box a").eq($(this).index()).addClass("dot_show").siblings().removeClass("dot_show");
	},function(){
		autoplay();
	})

	$("#pc_banner_top .mslide_banner").hover(function(){
		clearInterval(play);
		if($(this).index()==0){
			$(".MCUBE_MOD_ID_248606").css("background-color","rgb(234, 84, 255)");
		}else{
			$(".MCUBE_MOD_ID_248606").css("background-color","#7ae6ff");
		}
		$("#pc_banner_top .anim_mslide_dot_box a").eq($(this).index()).addClass("dot_show").siblings().removeClass("dot_show");
	},function(){
		autoplay();
	})

	/*鞋子 包包*/

	auto_lun_03();
	function auto_lun_03(){
		play2=setInterval(function(){
			if(j>4){
				j=-1;
			}
			++j;
			$(".point_03 a").eq(j).addClass("dot_show").siblings().removeClass("dot_show");
		},4000)
	}
	$(".point_03 a").hover(
			function() {
				clearInterval(play2)
				$(this).addClass("dot_show").siblings().removeClass("dot_show");
				$("#pc_lun_03 .mslide_banners .mslide_banner").eq($(this).index()).addClass("layui-this").siblings().removeClass("layui-this");
			},
			function() {
				auto_lun_03();

			});
	$("#pc_lun_03 .mslide_banner").hover(function(){
		clearInterval(play2)
		$("#pc_lun_03 .mslide_banners .mslide_banner").eq($(this).index()).addClass("layui-this").siblings().removeClass("layui-this");
	},function(){
		auto_lun_03();
	});

	/*男友*运动*/
	auto_lun_04();
	function auto_lun_04(){
		play3=setInterval(function(){
			if(k>4){
				k=-1;
			}
			++k;

			$(".point_04 a").eq(k).addClass("dot_show").siblings().removeClass("dot_show");
		},5000)
	}
	$(".point_04 a").hover(
			function() {
				clearInterval(play3)
				$(this).addClass("dot_show").siblings().removeClass("dot_show");
				$("#pc_lun_04 .mslide_banners .mslide_banner").eq($(this).index()).addClass("layui-this").siblings().removeClass("layui-this");
			},
			function() {
				auto_lun_04();

			});
	$("#pc_lun_04 .mslide_banner").hover(function(){
		clearInterval(play3)
		$("#pc_lun_04 .mslide_banners .mslide_banner").eq($(this).index()).addClass("layui-this").siblings().removeClass("layui-this");
	},function(){
		auto_lun_04();
	});

	/*美妆*个护*/
	auto_lun_05();
	function auto_lun_05(){
		play4=setInterval(function(){
			if(w>4){
				w=-1;
			}
			++w;

			$(".point_05 a").eq(w).addClass("dot_show").siblings().removeClass("dot_show");
		},4000)
	}
	$(".point_05 a").hover(
			function() {
				clearInterval(play4)
				$(this).addClass("dot_show").siblings().removeClass("dot_show");
				$("#pc_lun_05 .mslide_banners .mslide_banner").eq($(this).index()).addClass("layui-this").siblings().removeClass("layui-this");
			},
			function() {
				auto_lun_05();

			});
	$("#pc_lun_05 .mslide_banner").hover(function(){
		clearInterval(play4)
		$("#pc_lun_05 .mslide_banners .mslide_banner").eq($(this).index()).addClass("layui-this").siblings().removeClass("layui-this");
	},function(){
		auto_lun_05();
	});

	/*内衣*配饰*/
	auto_lun_06();
	function auto_lun_06(){
		play5=setInterval(function(){
			if(p>4){
				p=-1;
			}
			++p;

			$(".point_06 a").eq(w).addClass("dot_show").siblings().removeClass("dot_show");
		},5000)
	}
	$(".point_06 a").hover(
			function() {
				clearInterval(play5)
				$(this).addClass("dot_show").siblings().removeClass("dot_show");
				$("#pc_lun_06 .mslide_banners .mslide_banner").eq($(this).index()).addClass("layui-this").siblings().removeClass("layui-this");
			},
			function() {
				auto_lun_06();

			});
	$("#pc_lun_06 .mslide_banner").hover(function(){
		clearInterval(play5)
		$("#pc_lun_06 .mslide_banners .mslide_banner").eq($(this).index()).addClass("layui-this").siblings().removeClass("layui-this");
	},function(){
		auto_lun_06();
	});

	/*家居&amp;电器*/
	auto_lun_07();
	function auto_lun_07(){
		play6=setInterval(function(){
			if(v>4){
				v=-1;
			}
			++v;

			$(".point_06 a").eq(v).addClass("dot_show").siblings().removeClass("dot_show");
		},4000)
	}
	$(".point_07 a").hover(
			function() {
				clearInterval(play6)
				$(this).addClass("dot_show").siblings().removeClass("dot_show");
				$("#pc_lun_07 .mslide_banners .mslide_banner").eq($(this).index()).addClass("layui-this").siblings().removeClass("layui-this");
			},
			function() {
				auto_lun_07();

			});
	$("#pc_lun_07 .mslide_banner").hover(function(){
		clearInterval(play6);
		$("#pc_lun_07 .mslide_banners .mslide_banner").eq($(this).index()).addClass("layui-this").siblings().removeClass("layui-this");
	},function(){
		auto_lun_07();
	});

	/*母婴&amp;食品*/
	auto_lun_08();
	function auto_lun_08(){
		play7=setInterval(function(){
			if(t>4){
				t=-1;
			}
			++t;

			$(".point_08 a").eq(t).addClass("dot_show").siblings().removeClass("dot_show");
		},5000)
	}
	$(".point_08 a").hover(
			function() {
				clearInterval(play7)
				$(this).addClass("dot_show").siblings().removeClass("dot_show");
				$("#pc_lun_08 .mslide_banners .mslide_banner").eq($(this).index()).addClass("layui-this").siblings().removeClass("layui-this");
			},
			function() {
				auto_lun_08();

			});
	$("#pc_lun_08 .mslide_banner").hover(function(){
		clearInterval(play7)
		$("#pc_lun_08 .mslide_banners .mslide_banner").eq($(this).index()).addClass("layui-this").siblings().removeClass("layui-this");
	},function(){
		auto_lun_08();
	});





	var d;
	$(".MCUBE_MOD_ID_248606 .pc_banner_wrapper .nav_list_row .nav_wrap").hover(function(){
		d=$(this).parent(".nav_list_row").attr("data-topic");
		$(this).addClass("hover").addClass("bd-"+d);
		$(".nav_more_content").show();
		$(".nav_more_content ."+d).show();

	},function(){
		$(this).removeClass("hover").removeClass("bd-"+d);
		$(".nav_more_content").hide();
		$(".nav_more_content ."+d).hide();

	});
	var index;
	$(".nav_more_content").hover(function(){
		$(this).show();
		$(".nav_more_content ."+d).show();
		index=$(".nav_more_content ."+d).index();
		$(".MCUBE_MOD_ID_248606 .pc_banner_wrapper .nav_list_row .nav_wrap").eq(index).addClass("hover").addClass("bd-"+d);
	},function(){
		$(this).hide();
		$(".nav_more_content ."+d).hide();
		$(".MCUBE_MOD_ID_248606 .pc_banner_wrapper .nav_list_row .nav_wrap").eq(index).removeClass("hover").removeClass("bd-"+d);
	});

})


// 倒计时
	var _ordertimer = null;
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth();
	var g_d = date.getDate();
	var str=year+"/"+(month+1)+"/"+(g_d+1)+" 00:00:00";
	go(str);
	function leftTimer(enddate) {
		
		var leftTime = (new Date(enddate)) - new Date(); //计算剩余的毫秒数
		
		var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
		var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟
		var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数
		
		hours = checkTime(hours);
		minutes = checkTime(minutes);
		seconds = checkTime(seconds);

		if(hours >= 0 || minutes >= 0 || seconds >= 0) {
			$(".brandCountdown_main").find(".brandCountdown_hour").html(hours);
			$(".brandCountdown_main").find(".brandCountdown_minute").html(minutes);
			$(".brandCountdown_main").find(".brandCountdown_second").html(seconds);
		}
		if(hours <= 0 && minutes <= 0 && seconds <= 0) {
			window.clearInterval(_ordertimer);
			_ordertimer = null;
		}

	}

	function checkTime(i) { //将0-9的数字前面加上0，例1变为01
		if(i < 10) {
			i = "0" + i;
		}
		return i;
	}

	function go(v) {

		var date3 = new Date(),
			data2 = new Date(v);
		
		if(data2 < date3) return; //设置的时间小于现在时间退出
		_ordertimer = setInterval(function() {

			leftTimer(data2)
		}, 1000);
	}