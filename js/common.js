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

    const newsBoxesSlider = new Swiper('.news-boxes .swiper', {
        loop: true,
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 320px
            1366: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            }
        },
        navigation: {
            nextEl: '.news-boxes-next',
            prevEl: '.news-boxes-prev',
        }
    });

    $('.news-boxes-prev').on('click', function(){
        $('.news-boxes .swiper .news-boxes-prev').trigger('click');
    })

    $('.news-boxes-next').on('click', function(){
        $('.news-boxes .swiper .news-boxes-next').trigger('click');
    })

    const newsSlider = new Swiper('.news-slider .swiper', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
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
            },
            320: {
                slidesPerView: 2,
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

    const productInfoSlider = new Swiper('.product-info-slider .swiper', {
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    const goodsSlider = new Swiper('.goods-slider .swiper', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
        breakpoints: {
            // when window width is >= 320px
            1024: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        },
        navigation: {
            nextEl: '.goods-slider-next',
            prevEl: '.goods-slider-prev',
        },
        pagination: {
            el: '.goods-swiper-pagination',
            clickable: true,
        }
    });

    $('.goods-slider-prev').on('click', function(){
        $('.goods-slider .swiper .goods-slider-prev').trigger('click');
    })

    $('.goods-slider-next').on('click', function(){
        $('.goods-slider .swiper .goods-slider-next').trigger('click');
    })

    const blogSlider = new Swiper('.blog-slider .swiper', {
        loop: true,
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 320px
            1024: {
                slidesPerView: 3,
                spaceBetween: 44
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 15
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

    /* Btn-scroll-up */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.btn-scroll').fadeIn();
        } else {
            $('.btn-scroll').fadeOut();
        }
    });
    $('.btn-scroll').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 200);
        return false;
    });

    /* Fancybox */
    $('.fancybox').fancybox();

    /* Accordion */
    $('.accordion .opener').on('click', function() {
      if($(this).closest('li').hasClass('active')){
       $(this).closest('li').removeClass('active');
       $(this).closest('li').find('.accordion-slide').slideUp();
      } else {
       $(this).closest('.accordion').find('.accordion-slide').slideUp();
       $(this).closest('.accordion').find('li').removeClass('active');
       $(this).closest('li').addClass('active');
       $(this).closest('li').find('.accordion-slide').slideDown();
      }
      return false;
    });

    /* btn down-up */
    $('.page-up').click(function(){
      $('body,html').animate({scrollTop:$('.form-column').offset().top},1000);
      return false;
    });

    /* UI Spinner */
    if ($('.spinner').length) {
        $('.spinner').spinner({
            min: 1,
        })
    }




    /* Gallery Slider */
    // const gallerySlider = new Swiper('.gallery-slider .mySwiper', {
    //     loop: true,
    //     spaceBetween: 15,
    //     slidesPerView: 3,
    //     freeMode: true,
    //     watchSlidesProgress: true
    // });

    // const gallerySliderNav = new Swiper('.gallery-slider .mySwiper2', {
    //     loop: true,
    //     spaceBetween: 15,
    //     navigation: {
    //         nextEl: '.button-next',
    //         prevEl: '.button-prev',
    //     },
    //     thumbs: {
    //       swiper: swiper,
    //     },
    // });

    // $('.gallery-slider .button-prev').on('click', function(){
    //     $('.gallery-slider .swiper .button-prev').trigger('click');
    // })

    // $('.gallery-slider .button-next').on('click', function(){
    //     $('.gallery-slider .swiper .button-next').trigger('click');
    // })

});