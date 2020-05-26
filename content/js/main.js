//открытие меню при добавлении сласса
jQuery(function () {
	var menu_show = $('.menu_show');
	var menu = $('.sect_one .line_menu menu');

	menu_show.on('click', function() {
		menu.toggleClass(' active');
		menu_show.toggleClass(' active');
	});
}); 


//init gallery
$(function() {
	$('#dg-container').gallery();
});

//swiper
$(function() {

 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
});