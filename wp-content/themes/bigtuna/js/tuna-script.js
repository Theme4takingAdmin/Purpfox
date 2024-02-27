(function($) {


		$(window).load(function() {
			var nav = $('#header-nav'),
				navHeight = nav.outerHeight(),
				topToHeaderNav = nav.offset().top,
				stickyFixDiv = $('#sticky-fix');


			function mobileStickyNav() {

					nav.addClass('sticky-mobile-nav');
					stickyFixDiv.css('height', navHeight);
					
			}

			if($(window).width() < 768) {
				mobileStickyNav();
			}
		});



		$(window).load(function() {
			$(window).scroll(function() {
    		checkScroll();
  		})
	    var checkScroll = function() {
	      var $header = $('header')
	      if($(window).width() > 767) {
	        if($(document).scrollTop() > 50) {
	          $header.addClass('shrink');
	        } else {
	          $header.removeClass('shrink');
	        }
	      } else {
	        $header.removeClass('shrink');
	      }
	    }
	    var stick = function() {
	      if($(window).width() > 767) {
	        $('header').addClass('sticky');
	        $('body').css({'paddingTop':$('header').outerHeight(true)});
	        //$('body').css({'paddingTop': '207px'});
	        // Attach event handler to top level navigation dropdowns
	        $('.menu-item-has-children').on('click', '.dropdown-toggle', function(e) {
	          window.location.href = $(e.target).attr('href');
	        });
	      } else {
	        $('header').removeClass('sticky');
	        $('body').css({'paddingTop':'0'});
	        $('.menu-item-has-children').off()
	      }
	    }
	    // Stick nav by default
	    stick();
	    $(window).resize(function() {
	        stick();
	        checkScroll();
	    });
		});
    $(document).ready(function() {
    	new WOW({
      	mobile: false
      }).init();
      // Form AJAX
      // WPCF7 v5.2+ (req. DOM Events) | 07/2020
      // Find All wpcf7 forms:
      let wpcf7Elm = document.querySelectorAll( '.wpcf7' );
      
      // Loop thru each form and add event handlers:
      $(wpcf7Elm).each(function(){
        // On Submit (form submission completed successfully, regardless of results / errors):
        this.addEventListener( 'wpcf7submit', function( event ) {
          showFormResponseWrap(this);
        }, false );
      })
      // END event handlers loop

      // Show the Form Response Wrap after submission to indicate form results:
      let showFormResponseWrap = function( theCF7Form ){
        $(theCF7Form).find('.wpcf7-response-wrap').show().animate({ opacity: 1 }, 1000).css('pointer-events', 'auto');
      }
      // Hide Response Wrap on click of overlay or OK button:
      $('.form-wrap .wpcf7-response-wrap').on('click', function(e) {
        e.preventDefault();
        $(this).animate({ opacity: 0 }, 1000, function() {
          $(this).hide().css('pointer-events', 'none');
        });
      });
      // Hide invalid entry indicators (tips) after adjusting invalid inputs:
      $('.form-wrap').on('input', '.wpcf7-not-valid', function() {
        $(this).siblings('.wpcf7-not-valid-tip').hide();
      });
      // End Form AJAX
			$('.testimonial-carousel-001 .slider:not(.slick-initialized)').slick({
			  infinite: false,
			  autoplay: true,
			  autoplaySpeed: 8000,
			  arrows: false,
			  dots: true
			});	    
    });
})( jQuery );