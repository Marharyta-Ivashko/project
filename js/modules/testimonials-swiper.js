// Слайдер відгуків покупців
const testSlider = document.querySelector('.testimonials-slider');
if (testSlider) {
  new Swiper('.testimonials-slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: false,
    initialSlide: 1,
    navigation: {
      nextEl: '.testim-btn-next',
      prevEl: '.testim-btn-prev',
    },
    breakpoints: {
      320: { spaceBetween: 20 },
      992: { spaceBetween: -80 }
    }
  });
}
