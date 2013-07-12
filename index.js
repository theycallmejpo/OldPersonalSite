
// This function computes the current margin and updates css margins
var changeMargin = function() {
	var contentWidth = $('.mainContent').width();
	var margin = contentWidth * 0.5 / 100;

	$('.margin_right').css('margin-right', margin + 'px');
	$('.margin_top').css('margin-top', margin + 'px');
};

$(document).ready(changeMargin);
$(window).resize(changeMargin);

