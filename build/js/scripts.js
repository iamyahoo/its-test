$(document).ready(function(){

	//yandex maps
	ymaps.ready(function () {
	    var myMap = new ymaps.Map('map', {
	            center: [59.93772, 30.313622],
	            zoom: 10,
	            controls: ['zoomControl']
	        });
	});


	//page-menu opener
	$(function (){
		var pageMenuIcon = $('.page-menu__opener-icon');
		var pageMenu = $('.page-menu__item-wrapper');
		
		$(pageMenuIcon).click(function() {
    		$(this).toggleClass('page-menu__opener-icon_active'); 
    		$(pageMenu).toggleClass('page-menu__item-wrapper_active');   		
    	});	
	})

	// compute window height
	$(function (){
		var mapHeight= $('.page-container').height;
		console.log(mapHeight);
	})
	

})