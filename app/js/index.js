// ==========================================================================
// Smooth Scroll
// ==========================================================================

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// ==========================================================================
// Navigation
// ==========================================================================

$(document).ready(function() {
	$('.mobile-nav-button').click(function() {
	  console.log('click');
		$('.main-nav').toggleClass('selected');
	});

	$(".mobile-nav-icon").click(function(){
	  $(this).toggleClass("is-active");
	});

	$('.bounce').click(function() {
		$(this).addClass('active');
	});

	setTimeout(function() {
		$('.bounce').removeClass('active');
	},2000);

	$('body').bind('touchstart', function() {});


//Scroll Reveal

	var firstReveal = {
		duration: 1000,
		distance: '100px',
		scale: 1,
		easing: 'ease',
		reset: false
	};

	var secondReveal = {
		duration: 1200,
		distance: '100px',
		scale: 1,
		easing: 'ease',
		reset: false
	};

	var thirdReveal = {
		duration: 1400,
		distance: '100px',
		scale: 1,
		easing: 'ease',
		reset: false
	};

	window.sr = ScrollReveal();
	sr.reveal('.homepage-content__portfolio, .site-image, .about-content__about-image', firstReveal);
	sr.reveal('.homepage-content__about, .site-description, .about-content__my-work', secondReveal);
	sr.reveal('.homepage-content__contact, .page-navigation', thirdReveal);

});