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
			"background": "url(css/ghibli.jpg) no-repeat center center fixed",
			"-webkit-background-size" : "cover",
			"-moz-background-size" : "cover",
			"-o-background-size" : "cover",
			"background-size" : "cover"
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
			"background": "url(css/porkbuns.jpg) no-repeat center center fixed",
			"-webkit-background-size" : "cover",
			"-moz-background-size" : "cover",
			"-o-background-size" : "cover",
			"background-size" : "cover"

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
			"background": "url(css/kitties.jpg) no-repeat center center fixed",
			"-webkit-background-size" : "cover",
			"-moz-background-size" : "cover",
			"-o-background-size" : "cover",
			"background-size" : "cover"
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
			"background": "url(css/frisbee.jpg) no-repeat center center fixed",
			"-webkit-background-size" : "cover",
			"-moz-background-size" : "cover",
			"-o-background-size" : "cover",
			"background-size" : "cover"
		})
	});
	$('.ukulele').on('mouseover', function() {
		$(this).css({
			"color" : "white"
		});
	});
	$('.ukulele').on('click', function() {
		$(this).css({
			"color" : "white"
		});
		$('html').css({
			"background": "url(css/music.jpg) no-repeat center center fixed",
			"-webkit-background-size" : "cover",
			"-moz-background-size" : "cover",
			"-o-background-size" : "cover",
			"background-size" : "cover"
		})
	});
});