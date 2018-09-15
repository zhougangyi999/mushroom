$(".item_middle img").mouseover(function() {
	$(this).css("transform", "translateY(-5px)")
})
$(".item_middle img").mouseout(function() {
	$(this).css("transform", "translateX(0px)")
})
$(".item_middle div a").mouseover(function() {
	$(this).css("text-decoration", "none")
})
$(".item_content_right img").mouseover(function() {
	$(this).css("opacity", "0.4")
})
$(".item_content_right img").mouseout(function() {
	$(this).css("opacity", "1")
})
jQuery(document).ready(function($) {
	if($(this).scrollTop() == 0) {
		$("#TOP").hide();
	}
	$(window).scroll(function(event) {
		/* Act on the event */
		if($(this).scrollTop() == 0) {
			$("#TOP").hide();
		}
		if($(this).scrollTop() != 0) {
			$("#TOP").show();
		}
	});
	$("#TOP").click(function(event) {
		/* Act on the event */
		$("html,body").animate({
				scrollTop: "0px"
			},
			666
		)
	});
	$("img").lazyload({
		effect: "fadeIn",
	});
});
$(function(){
	$(window).bind("scroll",function(){
		var sTop=$(window).scrollTop();
		var sTop=parseInt(sTop);
		if (sTop>=130) {
			$(".fix_top_div").show();
			$(".fix_top_div").css("z-index","90");
		} else{
			$(".fix_top_div").hide();
		}
	})
})