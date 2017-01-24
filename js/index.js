console.log("honored you're using inspect element on my goofy website -- if you have thoughts or advice, email me at chan.pham@columbia.edu!");

$( window ).ready(function() {
  console.log("window is ready");
  var wHeight = $(window).height();
  console.log(wHeight);
	$('.page')
      .height(wHeight)
      .scrollie({
        scrollOffset : -50,
        scrollingInView : function(elem) {
                   
        bgColor = elem.data('background');
          
          $('body').css('background-color', bgColor);
          
        }
      });

  });