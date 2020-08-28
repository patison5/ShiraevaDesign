new WOW().init();

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





	
	if (window.innerWidth <= 1024) {
		var menuWrapper;

		if (window.innerWidth <= 460) {
			menuWrapper = document.getElementsByClassName('menu__wraper-mobile')[0]
		} else {
			menuWrapper = document.getElementsByClassName('menu__wraper')[0]
		}
		// console.log(screen.width)

		var sandwitchBtns = document.getElementsByClassName('sandwitch');
		var menuWraperHeight = window.getComputedStyle(menuWrapper, null).height;
		var menuWrap = document.getElementsByClassName('mobile-menu__wrap')[0];
		menuWrap.style.top = menuWraperHeight;


		console.log(menuWraperHeight)


		for (var i = 0; i < sandwitchBtns.length; i++) {
			sandwitchBtns[i].addEventListener('click', function (e) {
				e.preventDefault();
				menuWrap.classList.toggle('active');
				console.log(this)
			})
		}
	} else {
		// document.getElementsByClassName('sandwitch__img')[0].style.display = "none";
		
	}




	console.log(document.body.clientWidth)
	console.log(window.innerWidth)

	
	console.log()






      $(document).ready(function(){
        $(".menu__link").on("click", function (event) {
          event.preventDefault();
         	var id  = $(this).attr('href'),
			mg = $('.header-wrap').outerHeight(),
			top = $(id).offset().top - mg;
			// top = $(id).offset().top - mg - 15;

			$('.mobile-menu__wrap').removeClass('active');

			$('body, html').animate({scrollTop: top}, 1500);
        });
      });



      ;( function( $ ) {

		$( '.lightzoom' ).lightzoom( {
			speed:                 400,   // скорость появления
			imgPadding:            5,    // значение отступа у изображения
			overlayOpacity:        '0.5', // прозрачность фона (от 0 до 1)
			viewTitle:             false, // true, если надо показывать подпись к изобажению
			isOverlayClickClosing: true, // true, если надо закрывать окно при клике по затемненной области
			isWindowClickClosing:  true, // true, если надо закрывать окно при клике по любой области
			isEscClosing:          true  // true, если надо закрывать окно при нажатии на кнопку Esc
		} );

	} )( jQuery );   
}