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
		$(this).css({
			"color" : "white"
		});
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
		$(this).css({
			"color" : "white"
		});
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
		$(this).css({
			"color" : "white"
		});
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
	$('.music').on('mouseover', function() {
		$(this).css({
			"color" : "white"
		});
	});
	$('.music').on('click', function() {
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