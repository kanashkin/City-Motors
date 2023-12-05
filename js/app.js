const whySwiper = new Swiper('.why-swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        prevEl: '.swiper-left',
        nextEl: '.swiper-right',
    }
})

const autoBuySwiper = new Swiper('.auto-swiper', {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        500: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }
})

const burgerMenu = () => {
    const openBtn = document.querySelector('.burger')
    const closeBtn = document.querySelector('.burger-close')
    const burgerMenuBlock = document.querySelector('.burger-menu')

    openBtn.onclick = function() {
        burgerMenuBlock.classList.add('active')
    }

    closeBtn.onclick = function() {
        burgerMenuBlock.classList.remove('active')
    }
}

burgerMenu()