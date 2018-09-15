$(document).ready(function() {	
				$(window).scroll(function(event) {
					/* Act on the event */
					if($(this).scrollTop()==0){
						$("#TOP").hide();
					}
					if($(this).scrollTop()!=0){
						$("#TOP").show();
					}
				});	
					$("#TOP").click(function(event) {
								/* Act on the event */
								$("html,body").animate({
									scrollTop:"0px"},
									1000
									)
						});
		});