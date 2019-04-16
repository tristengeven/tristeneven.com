// $(function(){

//     window.sr = ScrollReveal();
  
//     if ($(window).width() < 768) {
  
//         if ($('.cd-timeline-content').hasClass('js--fadeInLeft')) {
//             $('.cd-timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
//         }
  
//         sr.reveal('.js--fadeInRight', {
//           origin: 'right',
//           distance: '300px',
//           easing: 'ease-in-out',
//           duration: 600,
//         });
  
//     } else {
        
//         sr.reveal('.js--fadeInLeft', {
//           origin: 'left',
//           distance: '300px',
//             easing: 'ease-in-out',
//           duration: 600,
//         });
  
//         sr.reveal('.js--fadeInRight', {
//           origin: 'right',
//           distance: '300px',
//           easing: 'ease-in-out',
//           duration: 600,
//         });
  
//     }
    
//     sr.reveal('.js--fadeInLeft', {
//           origin: 'left',
//           distance: '300px',
//             easing: 'ease-in-out',
//           duration: 600,
//         });
  
//         sr.reveal('.js--fadeInRight', {
//           origin: 'right',
//           distance: '300px',
//           easing: 'ease-in-out',
//           duration: 600,
//         });
  
//   });
  

jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scrolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});