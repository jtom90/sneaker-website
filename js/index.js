$(document).ready(function() {

	function navToggle() {
		$('nav ul').slideToggle();
	}

	$("#menu-bttn").click(navToggle);

	var width = $(window).width();

	if (width > 768) {
		$("nav ul").show();
		$("nav ul li a").show();
		// $(".trending .mini2 img").show();
	}

});