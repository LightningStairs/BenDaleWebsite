$(document).ready(function(){
	$('.carousel').slick({ 
		infinite: true,
		speed: 500,
		fade: true,
		accessibility: true,
		cssEase: 'linear',

		responsive: [
    {
      breakpoint: 925,
      settings: {
        slidesToShow: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        accessibility: true,
        mobileFirst: true,
        touchMove: true,
        respondTo: window,
      }
    },
  ]
	});
});
