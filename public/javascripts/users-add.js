function animateHeader(animTime){
	$('.header').slide('down',animTime);
}
setInterval(animateHeader(500),500);