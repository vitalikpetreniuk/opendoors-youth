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
        slidesPerView: 2,
        spaceBetween: 15,
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
        },
        pagination: {
            el: '.needs-pagination',
            clickable: true,
        }
    });

    $('.needs-prev').on('click', function(){
        $('.needs-top .swiper .needs-prev').trigger('click');
    })

    $('.needs-next').on('click', function(){
        $('.needs-top .swiper .needs-next').trigger('click');
    })

    const needs2 = new Swiper('.needs-top-2 .swiper', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
        breakpoints: {
            // when window width is >= 320px
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        },
        navigation: {
            nextEl: '.needs-next-2',
            prevEl: '.needs-prev-2',
        },
        pagination: {
            el: '.needs-pagination-2',
            clickable: true,
        }
    });

    $('.needs-prev-2').on('click', function(){
        $('.needs-top-2 .swiper .needs-prev-2').trigger('click');
    })

    $('.needs-next-2').on('click', function(){
        $('.needs-top-2 .swiper .needs-next-2').trigger('click');
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
        },
        pagination: {
            el: '.news-slider-pagination',
            clickable: true,
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
            1199: {
                slidesPerView: 5,
                spaceBetween: 5
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 5
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 5
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
        },
        pagination: {
            el: '.blog-slider-pagination',
            clickable: true,
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
        }, 600);
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

    /* Tabs */
    $('.tabset .tab-control').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.tabset').find('.tab').removeClass('active').eq($(this).index()).addClass('active');
        return false;
    });

    /* Check All Select */
    $("#check-all").click(function () {
        $('input:checkbox').not(this).prop('checked', this.checked);
    });

    /* Search */
    $('.search-form-btn').on('click', function(){
      $(this).closest('.search-form').toggleClass('open');
      return false;
    });
    $(document).click(function(event) {
      if ($(event.target).closest(".search-form .search").length) return;
      $(".search-form").removeClass('open');
      event.stopPropagation();
    });

    /* custom-select-currency */
	$('.custom-select__option').on('click', function () {
		$('#currency').val($(this).data('value'))
		console.log($('#currency').val());
		$('#gift-form').removeClass().addClass($('#currency').val());
	})

    let sum
    $( ".wrap-input input" ).on('input', function () {            
        sum = 0
        $('.wrap-input input:not(.total)').each(function (){
            sum += Number($(this).val())
        })
        $('.total').val(sum)
    });

});