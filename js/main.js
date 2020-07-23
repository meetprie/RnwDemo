$(document).ready(function() {

	$(document).on('click', '.nav-link', function(e) {
	    var id = $(this).attr('href');
	    var $id = $(id);
	    if ($id.length === 0) {
	        return;
	    }
	    e.preventDefault();
	    var pos = $id.offset().top;
	    $('body, html').animate({scrollTop: pos},500);
	});
	$(window).scroll(function() {
		var header = $('.header_bottom');
		var scroll = $(window).scrollTop();

		if (scroll > 300) {
			header.addClass('fixed');
		}
		else{
			header.removeClass('fixed');
		}
	});
	$('.testimonials_slider').owlCarousel({
	    loop:false,
	    margin:10,
	    nav:false,
	    dots:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
	$('.client_logo_slider').owlCarousel({
			loop:false,
			margin:20,
			dots:true,
			nav:false,
			autoplay:true,
			autoplayTimeout:2000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				400:{
					items:2
				},
				600:{
					items:3,
					dots:false
				},
				900:{
					items:4
				},
				1000:{
					items:5
				},
				1200:{
					items:6
				}
			}
		});


	$('.success_storics_slider').owlCarousel({
	    loop:false,
	    margin:10,
	    nav:true,
	    // dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1,
	            dots: true,
	        },
	        1000:{
	            items:3
	        },
	        1200:{
	        	items: 3
	        }
	    }
	});
	$(window).scroll(function(){ 
       if ($(this).scrollTop() > 100) { 
           $('.scrollToTop').fadeIn(); 
       } else { 
           $('.scrollToTop').fadeOut(); 
       } 
   }); 
   $('.scrollToTop').click(function(){ 
       $("html, body").animate({ scrollTop: 0 }, 600); 
       return false; 
   });
});