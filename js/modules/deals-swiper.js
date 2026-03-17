// Слайдер секції "Deals Of The Month"
function initDealsSwiper() {
  const swiperEl = document.querySelector('.mySwiper');
  if (swiperEl) {
    new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      },
      navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      },
      pagination: {
        el: '.custom-pagination',
        clickable: true,
      },
    });
  }
}

// Ініціалізуємо після того, як loader.js вставить deals.html в DOM
document.addEventListener('component:loaded', initDealsSwiper);