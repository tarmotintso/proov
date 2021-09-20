/**
 * Theme functions file
 *
 * Contains handlers for navigation, accessibility, header sizing
 * footer widgets and Featured Content slider
 *
 */
( function( $ ) {
	$(document).ready(function(){
		$('#menu-toggle').click(function(e){
			$('body, #menu-toggle, #primary-menu').toggleClass('toggled');
			e.preventDefault();
		});
	});
	
	$('.sub-menu-toggle').click(function() {
		$(this).parent().toggleClass('toggled');
		$(this).toggleClass('toggled');
		$(this).siblings('.sub-menu').slideToggle();
	});
	
	$('#toggleSearch').click(function() {
		$('#searchform').slideToggle('fast');
	});

	$(".scrollto").click(function(event) {
        event.preventDefault(); 

        var defaultAnchorOffset = 110;

        var anchor = $(this).attr('data-attr-scroll');

        var anchorOffset = $('#'+anchor).attr('data-scroll-offset');
        if (!anchorOffset)
            anchorOffset = defaultAnchorOffset; 

        $('html,body').animate({ 
            scrollTop: $('#'+anchor).offset().top - anchorOffset
        }, 500);        
    });

	$('.lang-sw a.lang-sw-toggle').click(function(e) {
		$('.lang-sw ul ul').slideToggle('fast');
		$('.lang-sw').toggleClass('active');
		e.stopPropagation();
	});
	$(document).click(function() {
		$('.lang-sw ul ul').slideUp('fast');
		$('.lang-sw').removeClass('active');
	});
	

	$.each($('.block-banner'), function(){
		var bannerSwiper = new Swiper($(this).find('.swiper-container'), {
			slidesPerView: 1,
			observer: true,
			observeParents: true,
			autoHeight: true,
			pagination: {
				el: $(this).find('.swiper-pagination'),
				clickable: true,
			},
		});
	});
	
	var galleryThumbs = new Swiper('.product-thumbs-slider .swiper-container', {
		direction: 'vertical',
		slidesPerView: 3,
		spaceBetween: 10,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	var galleryTop = new Swiper('.product-main-slider', {
		spaceBetween: 0,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});

	$(document).ready(function() {
		$('.filter-group select').niceSelect();
		$('.form-group select').niceSelect();
	});

	$("#sidebar li.has-children").prepend('<span class="submenu-toggle"></span>');
    $(document).ready(function(){
        $(".has-children > .submenu-toggle").each(function () {
            if ($(this).parent().find('ul').is(':visible')) {
                $(this).parent().addClass('toggled');
            }
        });
        $(".has-children > .submenu-toggle").click(function(){
            var isToggled = $(this).parent().hasClass('toggled');
            if (isToggled === false) {
                $(this).closest('ul').find('li.toggled, li.current-cat, li.current-has-children').each(function () {
                    $(this).removeClass('toggled');
                    $(this).find("ul").slideUp();
                });
            }
            $(this).parent().toggleClass('toggled');
            $(this).siblings("ul").slideToggle();
        });
	});

	$('.modal').each(function(){
		var src = $(this).find('iframe').attr('src');
		$(this).on('click', function(){
			$(this).find('iframe').attr('src', '');
			$(this).find('iframe').attr('src', src);
		});
	});

})( jQuery );