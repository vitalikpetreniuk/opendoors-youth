$(function() {
	initFixedHeader();
	initHeaderSearch();
	initMobileNav();
	initSlickSlider();
	initSlickSlider2();
	initTabs();
});

function initFixedHeader() {
	window.onscroll = function() {myFunction()};
	var sticky = header.offsetTop;
	function myFunction() {
		if (window.pageYOffset > sticky) {
			$('#header').addClass("sticky");
		} else {
			$('#header').removeClass("sticky");
		}
	}
}
function initHeaderSearch() {
	$('.form-search-btn').on('click', function(){
	  $(this).closest('.form-search').toggleClass('open');
	  return false;
	});
	$(document).click(function(event) {
	  if ($(event.target).closest(".form-search .search").length) return;
	  $(".form-search").removeClass('open');
	  event.stopPropagation();
	});
}
function initMobileNav(){
	$('.mob-btn').on('click', function(){
		$(this).closest('#nav').toggleClass('active');
		$('body').toggleClass('open-nav');
		return false;
	});
	// $(document).click(function(event) {
	// 	if ($(event.target).closest("#nav .nav-menu").length) return;
	// 	$("#nav").removeClass('active');
	// 	$('body').removeClass('open-nav');
	// 	event.stopPropagation();
	// });
};
function initSlickSlider() {
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 4000
	});
}
function initSlickSlider2() {
	$('.goods-list-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
}
function initTabs(){
	$('.tabset .tab-control').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.tabset').find('.tab').removeClass('active').eq($(this).index()).addClass('active');
			return false;
	});
	$('.tabset-catalog .tab-control-catalog').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.tabset-catalog').find('.tab').removeClass('active').eq($(this).index()).addClass('active');
			return false;
	});
}