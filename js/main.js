/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start 
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($) {
	
	"use strict"
	
	/*-----------------------------------------------------------------------------------*/
	/* 	LOADER
	/*-----------------------------------------------------------------------------------*/
	$("#loader").delay(500).fadeOut("slow");
	
	/*-----------------------------------------------------------------------------------*/
	/* 		WORK FILTER
	/*-----------------------------------------------------------------------------------*/
	var $container = $('.portfolio-wrapper .items');
	   $container.imagesLoaded(function () {
	   $container.isotope({
	   itemSelector: '.item',
	   layoutMode: 'fitRows'
	  });
	});
	$('.filter li a').on('click', function () {
	   $('.filter li a').removeClass('active');
	   $(this).addClass('active');
	   var selector = $(this).attr('data-filter');
	   $container.isotope({
	   filter: selector
	   });
	   return false;
	});
	
	/*-----------------------------------------------------------------------------------*/
	/* 	SLIDER REVOLUTION
	/*-----------------------------------------------------------------------------------*/
	jQuery('.tp-banner').show().revolution({
		dottedOverlay:"none",
		delay:10000,
		startwidth:1170,
		startheight:950,
		navigationType:"bullet",
		navigationArrows:"solo",
		navigationStyle:"preview4",
		parallax:"mouse",
		parallaxBgFreeze:"on",
		parallaxLevels:[7,4,3,2,5,4,3,2,1,0],												
		keyboardNavigation:"on",						
		shadow:0,
		fullWidth:"on",
		fullScreen:"off",
		shuffle:"off",						
		autoHeight:"off",						
		forceFullWidth:"off",	
		fullScreenOffsetContainer:""	
	});
	
	/*-----------------------------------------------------------------------------------*/
	/* Pretty Photo
	/*-----------------------------------------------------------------------------------*/
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
		theme: "light_square"
	});
	
	/*-----------------------------------------------------------------------------------*/
	/* 	TESTIMONIAL SLIDER
	/*-----------------------------------------------------------------------------------*/
	$(".texti-slide").owlCarousel({ 
		items : 1,
		autoplay:true,
		loop:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		singleItem	: true,
		nav : true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		pagination : true,
		animateOut: 'fadeOut'	
	});
	
});





