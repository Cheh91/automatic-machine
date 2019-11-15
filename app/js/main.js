

$(function(){

    $('.header__box-slider').slick({
        dots: true,
        // fade: true,
        autoplay: true,
        speed: 2000,
        infinite: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                }
            }
        ] 
    });

    $('.slider__photo').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToShow: 2,
                    autoplay: true,
                }
                
               

            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToShow: 1,
                    autoplay: true,
                }
            }
        ]
    });

    $('.news__slider').slick({
        dots: true,
        // fade: true,
        // autoplay: true,
        speed: 3000,
    });

    

});