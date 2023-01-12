$(document).ready(function(){
	
	
	$("main .col-1 li:last-child").click(function(){
		
	$(".slider").animate({left:("-100%")});
		
		$(".btn").removeClass("active");
		$("main .col-1 li:last-child").addClass("active");
		
	
	
	});
	
	
	
	$("main .col-1 li:first-child").click(function(){
		
		$(".slider").animate({left:0});
		$(".btn").removeClass("active");
		$("main .col-1 li:first-child").addClass("active");
		
		
	});
	
	

	
});