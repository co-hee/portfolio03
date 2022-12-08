$(function () {

    $('.mainVisual .mainSlide').on('init afterChange', function () {
        var current = $('.mainVisual .mainSlide .slick-current')
        current.addClass('on').siblings().removeClass('on');
    });


    $('.mainVisual .mainSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHOVER: false,
        pauseOnFocus: false
    });

    $('.pop_gnb .pop_slide').slick({

        autoplay: false,
        pauseOnHOVER: false,
        pauseOnFocus: false,
        slidesToShow: 6,
        slidesToScroll: 6,

    });







});


