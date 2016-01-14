console.log("meow");

$(document).ready(function() {
	$('.miyazaki').on('mouseover', function() {
		$(this).css({
			"color" : "white"
		});
	});
	$('.miyazaki').on('click', function() {
		$(this).css({
			"color" : "white"
		});
		$('html').css({
			"background-image" : "url(css/ghibli.jpg)", 
			"background-attachment" : "fixed",
			"background-size" : "100%"
		});
	});
	$('.noms').on('mouseover', function() {
		$(this).html('noms!');
	});
	$('.noms').on('click', function() {
		$(this).css({
			"color" : "white"
		});
		$('html').css({
			"background-image" : "url(css/porkbuns.jpg)",
			"background-attachment" : "fixed",
			"background-size" : "100%"
		})
	});
	$('.fluffies').on('mouseover', function() {
		$(this).html('fluffies!');
	});
	$('.fluffies').on('click', function() {
		$(this).css({
			"color" : "white"
		});
		$('html').css({
			"background-image" : "url(css/kitties.jpg)",
			"background-attachment" : "fixed",
			"background-size" : "100%"
		})
	});
	$('.frisbee').on('mouseover', function() {
		$(this).html('frisbee!');
	});
	$('.frisbee').on('click', function() {
		$(this).css({
			"color" : "white"
		});
		$('html').css({
			"background-image" : "url(css/frisbee.jpg)",
			"background-attachment" : "fixed",
			"background-size" : "100%"
		})
	});
	$('.ukulele').on('mouseover', function() {
		$(this).html('music!');
	});
	$('.ukulele').on('click', function() {
		$(this).css({
			"color" : "white"
		});
		$('html').css({
			"background-image" : "url(css/music.jpg)",
			"background-attachment" : "fixed",
			"background-size" : "100%"
		})
	});
});