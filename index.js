
// This function computes the current margin and updates css margins
var changeMargin = function() {
	var contentWidth = $('.mainContent').width();
	var margin = contentWidth * 0.5 / 100;

	$('.margin_right').css('margin-right', '0.5%');
	$('.margin_top').css('margin-top', margin + 'px');
};

$(document).ready(changeMargin);
$(window).resize(changeMargin);

$(document).ready(function () {

	$('#linkedin_icon').click(function() {
		window.open("http://www.linkedin.com/pub/juan-posadas-castillo/6b/22a/213");
	});

	$('#facebook_icon').click(function() {
		window.open("https://www.facebook.com/jposadas92");
	});

	$('#twitter_icon').click(function() {
		window.open("https://twitter.com/jposadasc");
	});

	$('#github_icon').click(function() {
		window.open("https://github.com/jposadas");
	});

	$('#email_icon').click(function () {
		window.location.href = "mailto:jposadas@stanford.edu";
	});

});


$(document).ready(function() {

	$('.me-container').hover(function() {
		$('.me-container .flipper').toggleClass('flip');
	});

	$('.about-switch').click(function() {
		$('.about-container .flipper').toggleClass('flip');
	});

});
