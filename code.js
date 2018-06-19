var pagAtual;

$(function(){

	$(".banner").on('click',function(){
		$(this).slideUp(700, function(){
			pagAtual = $(this).attr('data-pag');
		});
		$(".banner").delay(300).slideUp('700', function(){
			$(".about").css('display', 'none');
			$('#'+ pagAtual).css('display', 'block');
			$("#home_menu").css("display", "block");
		});
	});

	$("nav.menu button").on("click", function(){
		$(".gallery").css('display', 'none');
		pagAtual = $(this).attr('data-pag');
		$('#'+pagAtual).css('display', 'block');
		$("nav.menu button").css("backgroundColor", "#CC7C57");
		$(this).css("backgroundColor", "#FFE0C6");
	});

});

