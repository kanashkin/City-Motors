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
    loop: true,
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