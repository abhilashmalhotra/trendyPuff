new WOW().init();
$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		} 
	});
});
$('#mainSlider').owlCarousel({
	items:1,
	autoplay : true,
	autoplayTimeout : 3000,
	autoplayHoverPause:true,
	smartSpeed:450,
	loop:true,
	margin:0,
	nav:true,
	dots : false,
	mouseDrag : false,
	touchDrag : false,
	navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],	
	animateIn : 'fadeIn',
	animateOut : 'fadeOut'
});	
$('#Innovative').owlCarousel({
	items:4,
	autoplay : false,
	autoplayTimeout : 3000,
	autoplayHoverPause:true,
	smartSpeed:450,
	loop:true,
	margin:30,
	nav:true,
	dots : false,
	mouseDrag : true,
	touchDrag : true,
	navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],	
	animateIn : 'fadeInRight',
	animateOut : 'fadeOutLeft',
	responsive:{
		0:{
			items:1
		},
		576:{
			items:1
		},				
		767:{
			items:2
		},
		991:{
			items:4
		},
		1024:{
			items:4
		}
	}
})