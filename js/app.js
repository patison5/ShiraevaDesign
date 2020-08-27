window.onload = function() {

	var bxs = $(document).ready(function(){
		$('.slider1').bxSlider({
			auto: true,
			pager: false,
			autoControls: false,
			slideMargin: 10,
			touchEnabled:false,
			pause: 50000
		});
	});

	var bxs2 = $(document).ready(function(){
		$('#portfolio_1').bxSlider({
			auto: true,
			pager: false,
			autoControls: false,
			touchEnabled:false,
			pause: 50000
		});
	});
}