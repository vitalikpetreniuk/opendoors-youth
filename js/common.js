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
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    $('.needs-prev').on('click', function(){
        $('.needs-top .swiper .swiper-button-prev').trigger('click');
    })

    $('.needs-next').on('click', function(){
        $('.needs-top .swiper .swiper-button-next').trigger('click');
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

});
