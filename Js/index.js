// var swiper2 = new Swiper(".mySwiper2", {
//     loop: true,
//     spaceBetween: 5,
//     slidesPerView: 'auto',
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

var Firstswiper = new Swiper(".First-slider", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    navigation: {
        nextEl: ".first-thumb-button-next",
        prevEl: ".first-thumb-button-prev",
    },
});

// 

var swiper = new Swiper('.team-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1000000, // autoplay delay in milliseconds
        disableOnInteraction: false, // prevent autoplay from stopping when the user interacts with the slider
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper('.slider-frame', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1000, // autoplay delay in milliseconds
        disableOnInteraction: false, // prevent autoplay from stopping when the user interacts with the slider
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});