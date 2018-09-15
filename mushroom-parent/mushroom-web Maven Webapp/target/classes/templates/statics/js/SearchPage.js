$(function(){
/*	//点击更多颜色
	$(".show_more").click(function(){
	     $("#yanse").removeClass("close");
	     //$("#yanse").addClass("close");   
	});*/
	
	//点击分类
	$("#fenlei li").click(function(){
		$("#fenleidiv").hide();
		//拿到 li里面的值  
		var yanse=$(this).text();
		$("#yijidiv").append("<li  pr='"+$(this).attr("data-id")+"'  > <a href='JavaScript:void(0)'>"+yanse+"</li>");
		shanchu();
		soso();
	});
	/*//点击任何一个颜色  yansediv
	$("#yanse li").click(function(){
		$("#yansediv").hide();
		//拿到 li里面的值  
		var yanse=$(this).text();
		$(".bread_choose").append("<li class='cancel'>"+yanse+"<span>x</span></li>");
		shanchu();
	});
	//点击材质
	$("#caizhi li").click(function(){
		$("#caizhidiv").hide();
		//拿到 li里面的值  
		var yanse=$(this).text();
		$(".bread_choose").append("<li class='cancel'>"+yanse+"<span>x</span></li>");
		shanchu();
	});
	//点击尺寸   
	$("#chicun li").click(function(){
		$("#chicundiv").hide();
		//拿到 li里面的值  
		var yanse=$(this).text();
		$(".bread_choose").append("<li class='cancel'>"+yanse+"<span>x</span></li>");
		shanchu();
	});
	//点击清洗
	$("#qingxi li").click(function(){
		$("#qingxidiv").hide();
		//拿到 li里面的值  
		var yanse=$(this).text();
		$(".bread_choose").append("<li class='cancel'>"+yanse+"<span>x</span></li>");
		shanchu();
	});
	*/
	//点击所有分类 suoyou
	/*$("#suoyou").click(function(){
		$("#qingxidiv").show();
		$("#chicundiv").show();
		$("#caizhidiv").show();
		$("#yansediv").show();
		$("#fenleidiv").show();
		$(".bread_choose").html("");
		$("#yijidiv").html("");
	});*/
	
	
	//点击筛选框里面 X   删除里面的值
	function shanchu(){
		$(".bread_choose li  span").click(function(){
			var  pr=  $(this).parents('li').attr('pr');
			$('.pr'+pr).parents(".filter_item_wrap").show();
			$(this).parents('li').remove();
			
			soso(1,null,null,null,null);
			xshow();
		});
	}
	
	
	
	//点击颜色的更多  mutil
   $(".sele_cancel").click(function(){
	   $(this).parent().removeClass("show").prev().removeClass("mutil");
	});
	//多选
	$(".mutil_sele").click(function(){
			$(this).parents(".filter_item_wrap").siblings().find('ul').addClass('close')
			$(this).parents(".filter_item_wrap").siblings().find('.sub_box').removeClass("show")
			$(this).parents(".filter_item_wrap").find('ul').toggleClass("mutil")
			$(this).parents(".filter_item_wrap").find('.sub_box').toggleClass("show")
		} 
	);
	$(".show_more").click(function(){
 
		$(this).parents(".filter_item_wrap").siblings().find('ul').removeClass("mutil")
		$(this).parents(".filter_item_wrap").siblings().find('.sub_box').removeClass("show")
		$(this).parent().find('ul').toggleClass("close")
		//$(this).parent().removeClass("show").prev().removeClass("mutil")
	});
	//条件
	$(".filter_item li").click(function(){
		if($(this).find(".sele_box").is(':hidden')){
			 
			$(".bread_choose").append("<li ppath='"+($(this).attr("data-id"))+"'  pr='"+($(this).attr("pr"))+"'  > <a href='JavaScript:void(0)'>"+($(this).find('span').text())+"<span>x</span></li>");
			$(this).parents(".filter_item_wrap").hide();
			
			shanchu();
			xshow();
			soso(1,null,null,null,null);
		}
	});
	//多选
	$(".sele_confirm").click(function(){
		$(this).parent().removeClass("show").prev().removeClass("mutil");
		if($(".filter_item input[type='checkbox']:checked").length>0){
			
			//拿到 li里面的值 
			var yanse=""
			var i=1;
			var data_id="";
			//"id":["4227","4228"]
			var  a="";
			var pr='';
			$(".filter_item input:checkbox:checked").each(function(){
				 if(i==1){
					 i=3;
					 yanse+=$(this).parents("li").find("span").text()+" ";
				 } else{
					 yanse+=" ,"+$(this).parents("li").find("span").text()+" ";
				 }
				 a+=","+$(this).parents("li").attr("data-id")+"";
				 pr=$(this).parents("li").attr("pr-id");
			});
		 
			$(".bread_choose").append("<li ppath='"+a+"' pr='"+pr+"' > <a href='JavaScript:void(0)'>"+yanse+"<span>x</span></li>");
			$(this).parents(".filter_item_wrap").hide();
			shanchu();
			xshow();
		}
		
	});
     var name=$(".sort_container>input").attr("name");
   
     if($('#new_product').val()!=null&&$('#new_product').val()!=''){
     	$(".sort_container>a:eq(1)").addClass('on').siblings().removeClass("on");
     }else if($('#spu').val()!=null&&$('#spu').val()!=''){
    	 $(".sort_container>a:eq(1)").addClass('on').siblings().removeClass("on"); 
     }else if(name=="new_product"){
    	 $(".sort_container>a:eq(2)").addClass('on').siblings().removeClass("on"); 
     }
     $(".sort").click(function(){
    	   var index=parseInt($(this).index());
    	   $(this).addClass('on').siblings().removeClass("on").index();	
    	   switch (index) {
				case 0:
					
					$("#spu").val('')
					$("#new_product").val('')
					break;
				case 1:
			 
					$("#spu").val('1')
					$("#new_product").val('')
					break;
				case 2:
					$("#spu").val('')
					$("#new_product").val('1')
					 
					break;
				default:
					//alert(index)
					break;
				}
    	   soso(1,null,null,null,null)
     });
     
/*	$(".show_more").show()*/	
	shanchu();
	xshow();
	$(".clear_all,#suoyou").click(function(){
		location.reload()
	});
});

//打开和关闭
function xshow(){
	if($('.bread_choose li').length==0){
			$(".clear_all").hide()
		}else{
			$(".clear_all").show()	
	 }
}

//搜索异步
function  soso(currPageNo,new_product,spu,minPrice,maxPrice){
	//alert(minPrice)
	var pr=$("#yijidiv").find('li').attr('pr'),
	    q=$("#q").val(),
		ppath;
		$(".bread_choose li").each(function() {
			ppath=$(this).attr('ppath'); 
		})
		//alert(ppath)
		if(minPrice==null&&maxPrice==null){
			minPrice=$('#minPrice').val();
			maxPrice=$('#maxPrice').val()
		}
	if(new_product==null||new_product==''){
		new_product=$("#new_product").val();
	}
	
	if(spu==null||spu==''){
		spu=$("#spu").val();
	}
	//alert(spu)
	//alert(new_product)
	if(minPrice!=null&&minPrice!=''&&maxPrice!=null&&maxPrice!=''){
		if(parseInt(minPrice)>parseInt(maxPrice)){
			var temp=minPrice;
			minPrice=maxPrice;
			maxPrice=temp;
		}
	}
	
	$('#minPrice').val(minPrice);
	$('#maxPrice').val(maxPrice);
	$.ajax({
		url : 'sos.json',
		type : 'get',
		data : {"prn":pr,'q':q,'currPageNo':currPageNo,'minPrice':minPrice,'maxPrice':maxPrice,  'spu':spu,'new_product':new_product,'ppath':ppath},
		success:function(data){
			$('#common_goods_wall').html('')
			if(undefined==data.data.commodits||data.data.commodits==''){
				$('#common_goods_wall').html("<div class='selection_box search_noresult'><p>筛选条件太多啦，未找到相关结果</p><a href='javascript:;' onclick='if(window.history){history.back();}else{self.location=document.referrer;}' class='backlast'>点击返回上一步</a></div>")				
			}else{
				$(data.data.commodits).each(function(){
					$('#common_goods_wall').append("<div class='iwf goods_item ratio3x4' data-tradeitemid='1lqv1ru' goods-index='70' is-exposed='true'>"+
				    "<a rel='nofollow' href='shop/myshop.html/"+this.commodity_id+"' class='img pagani_log_link J_dynamic_imagebox loading_bg_120 J_loading_success' target='_blank' img-src='' need-remove='no'>"+
					 "<img class='J_dynamic_img fill_img' src='"+this.main_img+"' alt=''>"+
				    "</a><a rel='nofollow' target='_blank' href='shop/myshop.html/"+this.commodity_id+"' class='pagani_log_link goods_info_container'>"+
					"<p class='title yahei fl' style='height:40px;margin-bottom:3px'>"+this.title+"</p>"+
					"<div class='goods_info fl'>"+
					"<b class='price_info yahei'>¥"+this.prompt_price+"</b>"+
					"<span class='fav_num fr'>"+
					"<img src='/img/xingxing.png' alt=''>"+this.spu+"</span></div></a></div>");
				});
			}
		}
	});
}




