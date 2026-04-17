$(document).ready(function(){
	$("#modal_unidades").hide();
	$("#corpo_modal").hide();
	
	$(".whatsapp").click(function() {
		$("#modal_unidades").fadeIn(function() {
			$("#corpo_modal").show(function() {
				$("#corpo_modal").animate({
					top: "20px"
				}, 300);
			})
		});
	});
	
	$(".fechar").click(function() {
		$("#modal_unidades").fadeOut(function() {
			$("#corpo_modal").hide(function() {
				$("#corpo_modal").animate({
					top: "-100%"
				});
			});
		});
	});
});
