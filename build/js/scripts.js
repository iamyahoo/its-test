$(document).ready(function(){

	//yandex maps
	ymaps.ready(init);
	var myMap;

	function init () {
	    myMap = new ymaps.Map("map", {
	        center: [59.93772, 30.313622],
	        zoom: 11
	    }, {
	        balloonMaxWidth: 250
	    });

	    //кнопки масштабирования
	    myMap.controls.add('zoomControl', {
	    	right: 20,
	    	bottom: 20
	    }) ;

	    // Обработка события, возникающего при щелчке
	    // левой кнопкой мыши в любой точке карты.
	    // При возникновении такого события откроем балун.
	    myMap.events.add('click', function (e) {
	        if (!myMap.balloon.isOpen()) {
	            var coords = e.get('coordPosition');
	            myMap.balloon.open(coords, {
	            	baloonShadow: false,
	                contentBody:
	                	'<p class="ymaps-baloon-title">Курортный район</p>' +
	                    '<a class="ymaps-baloon-link">Поселок песочный</a>'
	            });
	        }
	        else {
	            myMap.balloon.close();
	        }
	    });
	}



	//page-menu opener
	$(function (pageMenuOpen) {
		var pageMenu = $('.page-menu-wrapper');
		var pageMenuIcon = $('.page-menu__opener-icon');
		var pageMenuWrapper = $('.page-menu__item-wrapper');
		
		$(pageMenuIcon).click(function() {
    		$(this).toggleClass('page-menu__opener-icon_active'); 
    		$(pageMenu).toggleClass('page-menu-wrapper_active');
    		$(pageMenuWrapper).toggleClass('page-menu__item-wrapper_active');   		
    	});	
	})

	$(function (headerMenuOpen) {
		var headerMenuIcon = $('.header-menu__opener-icon');
		var rocket = $('.rocket');
		var boom = $('.boom');

		$(headerMenuIcon).click(function() {
    		$(this).toggleClass('header-menu__opener-icon_active');
    		$('.rocket').toggleClass('rocket_active');
    		$('.boom').toggleClass('boom_active');
    	});
    });

})