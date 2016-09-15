$(document).ready(fnLoad);
function fnLoad() {
	console.log($('.hello').length);
	$('.hello').append("&nbsp;hello");
}