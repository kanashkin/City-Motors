const whySwiper = new Swiper('.why-swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        prevEl: '.swiper-left',
        nextEl: '.swiper-right',
    }
})

const autoBuySwiper = new Swiper('.auto-swiper', {
    spaceBetween: 32,
    slidesPerView: 4,
    loop: true
})