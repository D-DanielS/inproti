(function (document, window, $) {
	$(".docentes__items").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
	
		autoplaySpeed: 15000,
		autoplay: true,
		responsive: [{

			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				infinite: true
			}

		}, {

			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
			}

		}, {

			breakpoint: 400,
			settings:{
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
			}, 
		}, {
			breakpoint: 200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true
			}

		}
	
	
	]
		// mobileFirst: true,
		// slidesToShow: 1,
		// slidesToScroll: 1,
	});
})(document, window, jQuery);

