$(function () {


    $('.slider__inner-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="img/icons/prev.svg" alt="prev.svg"></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="img/icons/next.svg" alt="next.svg"></button>',
    });

    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__inner-content',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        centerMode: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 5,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                }
            },
        ]
    })

    $('.header__menu-btn').on('click', function () {
        $('.header__inner-menu ul').slideToggle();
    });

});
