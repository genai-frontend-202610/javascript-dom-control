const swiper = new Swiper('.gallery', {
    navigation: {
        nextEl: '.gallery .swiper-button-next',
        prevEl: '.gallery .swiper-button-prev',
    },
    pagination: {
        el: '.gallery .swiper-pagination',
    },
    loop:true
});