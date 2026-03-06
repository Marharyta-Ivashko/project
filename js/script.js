  // --- 1. НАЛАШТУВАННЯ СЛАЙДЕРА SWIPER ---
const swiper = new Swiper('.mySwiper', {
  // Показуємо 1 повний слайд і "шматочок" наступного на мобільному
  slidesPerView: 1.2, 
  spaceBetween: 20, // Відстань між фото (в пікселях)
  
  // Налаштування для різних екранів (Адаптивність)
  breakpoints: {
    768: {
      // На планшетах і ПК показуємо 2 повних фото і половинку третього
      slidesPerView: 2.5, 
      spaceBetween: 30,
    }
  },

  // Підключаємо наші власні кнопки "Вперед/Назад"
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },

  // Підключаємо наші крапки
  pagination: {
    el: '.custom-pagination',
    clickable: true, // Щоб можна було клікати по крапках
  },
});
// ... далі йде ваш код таймера ...

// --- 2. НАЛАШТУВАННЯ ТАЙМЕРА ---
const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 3); // Акція на 3 дні вперед

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const formatTime = (time) => time < 10 ? `0${time}` : time;

  document.getElementById("days").innerHTML = formatTime(days);
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("minutes").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);