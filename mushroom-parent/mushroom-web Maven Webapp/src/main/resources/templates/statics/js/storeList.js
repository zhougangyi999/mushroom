$(function() {
	$(window).bind("scroll", function() {
		var sTop = $(window).scrollTop();
		var sTop = parseInt(sTop);
		if(sTop >= 130) {
			$(".super_brands_left").show();
			$(".super_brands_right").show();
			$(".super_brands_left").addClass("animated");
			$(".super_brands_left").addClass("bounceInLeft");
			$(".super_brands_right").addClass("animated");
			$(".super_brands_right").addClass("bounceInRight");
		} else {
			$(".super_brands_left").hide();
			$(".super_brands_right").hide();
		}
	})
})