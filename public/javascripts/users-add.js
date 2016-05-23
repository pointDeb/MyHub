function animateHeader(animTime){
	$('.header').fadeIn(animTime).delay(animTime).hide();
}
setInterval(animateHeader(500),500);