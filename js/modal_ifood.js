$(document).ready(function(){
	$("#modal_ifood").hide();
	$("#corpo_modalif").hide();
	
	$(".btnifood").click(function() {
		$("#modal_ifood").fadeIn(function() {
			$("#corpo_modalif").show(function() {
				$("#corpo_modalif").animate({
					top: "100px"
				}, 300);
			})
		});
	});
	
	$(".fechar").click(function() {
		$("#modal_ifood").fadeOut(function() {
			$("#corpo_modalif").hide(function() {
				$("#corpo_modalif").animate({
					top: "-100%"
				});
			});
		});
	});
});