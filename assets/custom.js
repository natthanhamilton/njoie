$(document).ready(function () {
	$('.slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		adaptiveHeight: true,
	});

	/* Slick needs no get Reinitialized on window Resize after it was destroyed */
	$(window).on('load resize orientationchange', function () {
		$('.mobile-slider').each(function () {
			var $carousel = $(this);
			/* Initializes a slick carousel only on mobile screens */
			// slick on mobile
			if ($(window).width() > 990) {
				if ($carousel.hasClass('slick-initialized')) {
					$carousel.slick('unslick');
				}
			} else {
				if (!$carousel.hasClass('slick-initialized')) {
					$carousel.slick({
						dots: true,
						arrows: false,
						infinite: true,
						adaptiveHeight: true,
						mobileFirst: true,
					});
				}
			}
		});
	});

	$('.slider').on('afterChange', function(event, slick, currentSlide){
		$('.slick-dot-highlight').removeClass('active');
		$(`.slick-dot-highlight.dot-number-${currentSlide+1}`).addClass('active')
		console.log(currentSlide);
	});

	$('[data-slide]').click(function(e) {
		e.preventDefault();
		var slideno = $(this).data('slide');
		$('.slider').slick('slickGoTo', slideno - 1);
	});

	$('.svg-container .icon').click(function () {
		$(this).siblings('.icon').removeClass('active');
		$(this).addClass('active');
		$('.svg-container .current-icon img').attr(
			'src',
			$(this).data('display')
		);
	});

	$('.attachments-container .icon').click(function () {
		$(this).siblings('.icon').removeClass('active');
		$(this).addClass('active');

		$('.attachments-container .attachments > div').removeClass('active');
		$('.attachments-container .attachments')
			.find('#' + $(this).data('target'))
			.addClass('active');
	});

	$('.site-nav--has-dropdown button').click(function() {
		if ($(this).attr('aria-expanded') == 'true') {
			$('#backdrop').removeClass('backdrop')
		} else {
			$('#backdrop').addClass('backdrop')
		}
	});

	$('#backdrop').click(function() {
		$(this).removeClass('backdrop')
	});

	$('[variant-controls]').on('change', function () {
		$('.single-option-selector').val($(this).data('color')).change()
	});
});