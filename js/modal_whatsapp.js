$(document).ready(function(){
	$("#modal_whatsapp").hide();
	$("#corpo_modal").hide();
	
	$(".whatsapp").click(function() {
		$("#modal_whatsapp").fadeIn(function() {
			$("#corpo_modal").show(function() {
				$("#corpo_modal").animate({
					top: "10px"
				}, 300);
			})
		});
	});
	
	$(".fechar").click(function() {
		$("#modal_whatsapp").fadeOut(function() {
			$("#corpo_modal").hide(function() {
				$("#corpo_modal").animate({
					top: "-100%"
				});
			});
		});
	});
});
