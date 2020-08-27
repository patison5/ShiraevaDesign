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

	var bxs2 = $('.portfolio__wrap').bxSlider({
		// auto: true,
		pager: false,
		autoControls: false,
		touchEnabled:false,
		pause: 50000
	});



	var menuList = document.getElementsByClassName('menu__list')[0]
	var portfolioMenuElements = menuList.getElementsByClassName('menu__element');
	var blocksContainers =  document.getElementsByClassName('portfolio_single-wrap');

	for (var i = 1; i < blocksContainers.length; i++) {
		console.log()
		blocksContainers[i].style.display = "none";
	}

	for (var i = 0; i < portfolioMenuElements.length; i++) {
		var menuElement = portfolioMenuElements[i];

		menuElement.addEventListener('click', function(e) {
			e.preventDefault()

			var id = this.dataset.el_id;
			var portfolioWrap = document.getElementById(id);

			for (var i = 0; i < portfolioMenuElements.length; i++) {
				portfolioMenuElements[i].classList.remove('active');
				var elWrap = portfolioMenuElements[i].dataset.el_id;
				document.getElementById(elWrap).style.display = "none";
			}

			this.classList.add('active');
			portfolioWrap.style.display = 'block';
			console.log(id)
			console.log(portfolioWrap)
		})
	}
}