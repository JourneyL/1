// JavaScript Document

window.onload=function(){
	$("*").bind("mouseover",function(){
			if($("nav").is(":hidden")){
			$("nav").slideDown(500);
			}
		});
	$(".logo").bind("mouseout",function(){
			if($("nav").is(":visible")){
			$("nav").slideUp(500);}
		});
	$(".menu1").bind("click",function(){
			$(".menu2").fadeIn(500);
		});
	$("#banner,.content,footer").bind("mouseover",function(){
			$(".menu2").fadeOut(500);
		});
	
	$(".menu2 li").bind("mouseover",function(){
			$(this).fadeTo(100,0.7);
		});
	$(".menu2 li").bind("mouseout",function(){
			$(this).fadeTo(100,1);
		})
}
