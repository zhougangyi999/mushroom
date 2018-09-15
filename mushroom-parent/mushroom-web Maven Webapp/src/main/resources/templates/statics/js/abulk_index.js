$(".goods_group_item").mouseover(function(){
	$(this).css("box-shadow","0px 0px 10px #999");
	$(this).css("transition","all 0.3s ease-in-out")
})
$(".goods_group_item").mouseout(function(){
	$(this).css("box-shadow","0px 0px 0px");
	$(this).css("transition","all 0.3s ease-in")
})
//$("#goods_group_tab_li2").click(function(){
//	$("#li1").hide();
//})
/*选项卡切换*/
$(".goods_group_tab ul li").click(function(){
	$(this).addClass("atv").siblings().removeClass("atv");
	var index=$(this).index();
	if (index==0) {
		$("#li1").show()
	} else{
		$("#li1").hide()
	}
	if (index==1) {
		$("#li2").show()
	} else{
		$("#li2").hide()
	}
	if (index==2) {
		$("#li3").show()
	} else{
		$("#li3").hide()
	}
	if (index==3) {
		$("#li4").show()
	} else{
		$("#li4").hide()
	}
})
