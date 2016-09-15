$(document).ready(fnSetbtn);

function fnSetbtn() {
	$('input#start').click (function (){ 
		$('div.box').animate({left : "+=100px"})
	});
	
	$('input#back').click (function (){ 
		$('div.box').animate({left : "-=100px"})
	});
	
	$('input#stop').click (function (){ 
		$('div.box').stop()
	});
	
	$('input#right').click (function (){ 
		$('div.box').animate({left : "+=100px"})
	});
	
	$('input#left').click (function (){ 
		$('div.box').animate({left : "-=100px"})
	});
	
	$('input#top').click (function (){ 
		$('div.box').animate({top : "-=100px"})
	});
	
	$('input#bottom').click (function (){ 
		$('div.box').animate({top : "+=100px"})
	});
}
