$(function() {
    let $body = $('body');
    let c_select =  $('.custom-select');
    let c_select_target =  $('.custom-select, .custom-select *');

    const swiper = new Swiper('.odCarousel .swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    const needs = new Swiper('.needs-top .swiper', {
        loop: true,
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 320px
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        },
        navigation: {
            nextEl: '.needs-next',
            prevEl: '.needs-prev',
        }
    });

    $('.needs-prev').on('click', function(){
        $('.needs-top .swiper .needs-prev').trigger('click');
    })

    $('.needs-next').on('click', function(){
        $('.needs-top .swiper .needs-next').trigger('click');
    })

    const newsSlider = new Swiper('.news-slider .swiper', {
        loop: true,
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 320px
            1366: {
                slidesPerView: 6,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 15
            }
        },
        navigation: {
            nextEl: '.news-slider-next',
            prevEl: '.news-slider-prev',
        }
    });

    $('.news-slider-prev').on('click', function(){
        $('.news-slider .swiper .news-slider-prev').trigger('click');
    })

    $('.news-slider-next').on('click', function(){
        $('.news-slider .swiper .news-slider-next').trigger('click');
    })

    const mapInfoSlider = new Swiper('.map-info-slider .swiper', {
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    const blogSlider = new Swiper('.blog-slider .swiper', {
        loop: true,
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 320px
            768: {
                slidesPerView: 3,
                spaceBetween: 25
            }
        },
        navigation: {
            nextEl: '.blog-slider-next',
            prevEl: '.blog-slider-prev',
        }
    });

    $('.blog-slider-prev').on('click', function(){
        $('.blog-slider .swiper .blog-slider-prev').trigger('click');
    })

    $('.blog-slider-next').on('click', function(){
        $('.blog-slider .swiper .blog-slider-next').trigger('click');
    })

    c_select.find('span').on('click', function(){
        let parent_select = $(this).parent();
        if(parent_select.hasClass('in-action'))
        {
            parent_select.removeClass('in-action');
        }else
        {
            c_select.removeClass('in-action');
            parent_select.addClass('in-action');
        }
    })
    c_select.find('ul li').on('click', function(){
        let div_select = $(this).parents('.custom-select');
        let select_id = div_select.attr('data-id');
        let select = document.querySelector('#'+select_id);
        let chosen_option = $(this).text();

        select.classList.add('selected');
        select.value = chosen_option;
        select.dispatchEvent(new Event('change'));

        $(this).parent().find('li').removeClass('active')
        $(this).addClass('active')

        div_select.find('span').text(chosen_option);
        div_select.removeClass('in-action');
    })

    $('.mobile-bar').on('click tap', function(){
        $body.addClass('no-scroll');
        $('.mobile-overlay').slideDown();
    })
    $('.mobile-overlay .close').on('click tap', function(){
        $body.removeClass('no-scroll');
        $('.mobile-overlay').slideUp();
    })

    $body.on('click', function(event) {
        if(!c_select_target.is(event.target))
        {
            c_select.removeClass('in-action');
        }
    })

    /* Slick Slider */
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
