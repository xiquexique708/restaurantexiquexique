$(document).ready(function(){
	$("#modal_99food").hide();
	$("#corpo_modal99").hide();
	
	$(".btn99food").click(function() {
		$("#modal_99food").fadeIn(function() {
			$("#corpo_modal99").show(function() {
				$("#corpo_modal99").animate({
					top: "100px"
				}, 300);
			})
		});
	});
	
	$(".fechar").click(function() {
		$("#modal_99food").fadeOut(function() {
			$("#corpo_modal99").hide(function() {
				$("#corpo_modal99").animate({
					top: "-100%"
				});
			});
		});
	});
});