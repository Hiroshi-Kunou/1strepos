/*
var userFeed = new Instafeed({
	get: 'user',
	userId: 2132697841,
	accessToken: '2132697841.467ede5.958f12d4d23b411b9eefbe714ba11b7c',
	template: '<a href="{{link}}"><img src="{{image}}" /></a><br>{{caption}}<br>'
});
	userFeed.run();
*/

var w=innerWidth;
var imgW=document.getElementById('scale1').naturalWidth;
var imgH=document.getElementById('scale1').naturalHeight;
var imgboxW=$(".photo").width;
var i=$(".backimg").css("left");
var md;
var mu;
/*z
window.onload=function(){
alert(imgW);
}
*/

document.onmousedown=function(){
	var winW=window.innerWidth;
	var md=event.clientX;
	document.onmouseup=function(){
		var mu=event.clientX;
		if(mu-md>0){
			$(".backimg").animate({left:'+=100%'},200);
		}else if(mu-md<0){
			$(".backimg").animate({left:'-=100%'},200);
		}
	}
}

$(document).ready(function(){
		if(imgW>imgH){
		$("#scale1").css("width","100%");
		$("#scale1").css("height","auto");
	}else if(imgW<imgH){
		$("#scale1").css("height","100%");
		$("#scale1").css("width","auto");
	}
})

var imgW2=document.getElementById('scale2').naturalWidth;
var imgH2=document.getElementById('scale2').naturalHeight;

$(document).ready(function(){
		if(imgW2>imgH2){
		$("#scale2").css("width","100%");
		$("#scale2").css("height","auto");
	}else if(imgW2<imgH2){
		$("#scale2").css("height","100%");
		$("#scale2").css("width","auto");
	}
})

var imgW3=document.getElementById('scale3').naturalWidth;
var imgH3=document.getElementById('scale3').naturalHeight;

$(document).ready(function(){
		if(imgW3>imgH3){
		$("#scale3").css("width","100%");
		$("#scale3").css("height","auto");
	}else if(imgW3<imgH3){
		$("#scale3").css("height","100%");
		$("#scale3").css("width","auto");
	}
})

$(document).ready(function(){
	$(".backimg").css("width",w*5);
})

$(document).ready(function(){
	$(".item").css("width",w);
})

$(document).ready(function(){
	$(".galpage").css("width",w);
})

$(document).ready(function(){
	$(".infopage").css("width",w);
})

$(function(){
	$(".title").click(function(){
		$(".backimg").css("left",0);
	})
})

$(function(){
	$(".works").click(function(){
		$(".backimg").css("left",-w);
	})
})

$(function(){
	$(".exbihition").click(function(){
		$(".backimg").css("left",-w*2);
	})
})

$(function(){
	$(".contact").click(function(){
		$(".backimg").css("left",-w*3);
	})
})

$(function(){
	$(".profile").click(function(){
		$(".backimg").css("left",-w*4);
	})
})

/*
document.touchstart=touchPos;
function touchPos(){
	var md=event.clientY;
	document.touchend=touchslideMenu;
	function touchslideMenu(){
		var mu=event.clientY;
		if(md-mu>=0){
			$(".backimg").css("left",-w);
			}else if(md-mu<=0){
			$(".backimg").css("left",0);
		}
	}
}

document.onmousedown=mousePos;
function mousePos(){
	var md=event.clientY;
	var l=document.getElementsByClassName('backimg').left;
	document.onmouseup=slideMenu;
	window.alert(l);
	function slideMenu(){
		var mu=event.clientY;
		if(md-mu>=0){
			$(".backimg").css("left",l-w);
			}else if(md-mu<=0){
			$(".backimg").css("left",l+w);
		}
	}
}

if(md-mu>0){
		$(".backimg").css("left",-w);
}

if(md-mu<0){
		$(".backimg").css("left",+w);
}
*/
