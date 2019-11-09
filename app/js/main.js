$(function(){

    $('.header__box-slider').slick({
        dots: true,
        // fade: true,
        autoplay: true,
        speed: 2000,
        infinite: true,
        
        
    });

    $('.slider__photo').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.news__slider').slick({
        dots: true,
        // fade: true,
        // autoplay: true,
        speed: 3000,
    });

});