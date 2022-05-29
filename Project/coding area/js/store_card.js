var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: false,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        // when window width is >= 100px
        100: {
            slidesPerView: 1,
            spaceBetweenSlides: 10,
        },
        // when window width is >= 300px
        300: {
            slidesPerView: 1,
            spaceBetweenSlides: 10,
        },
        // when window width is >= 685px
        686: {
            slidesPerView: 2,
            spaceBetweenSlides: 10,
        },
        // when window width is >= 1000px
        1000: {
            slidesPerView: 3,
            spaceBetweenSlides: 20,
        },
        // when window width is >= 1390px
        1390: {
            slidesPerView: 4,
            spaceBetweenSlides: 10,
        },
    }
});