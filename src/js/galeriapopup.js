$('.popup-gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true,
		  navigateByImgClick: true,
		  preload: [0,1]
        }
    });
});
