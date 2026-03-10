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
const countDownDate = new Date("March 31, 2026 23:59:59").getTime();

const timer = setInterval(function () {
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

// Знаходимо всі порожні div для рейтингу на сторінці
const containers = document.querySelectorAll('.product-rating');

// Зберігаємо код однієї зірки як звичайний текстовий рядок.
// Використовуємо зворотні апострофи (``), щоб рядок міг займати кілька ліній.
const starIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`;

// Метод repeat(5) створює один великий рядок з 5-ма зірками підряд.
// Проходимося по кожному знайденому елементу і додаємо в нього зірки.
containers.forEach(container => {
  container.innerHTML = starIcon.repeat(5);
});

// 1. Знаходимо всі посилання всередині нашого конкретного меню
const navLinks = document.querySelectorAll('#categoryMenu .nav-link');

// 2. Перебираємо кожне посилання та додаємо "слухача" подій
navLinks.forEach(link => {
  link.addEventListener('click', function (event) {

    // Запобігаємо стандартному переходу за посиланням (щоб сторінка не стрибала)
    event.preventDefault();

    // Крок А: Видаляємо клас 'active' з усіх пунктів меню
    navLinks.forEach(item => {
      item.classList.remove('active');
    });

    // Крок Б: Додаємо клас 'active' саме тому пункту, на який щойно натиснули
    this.classList.add('active');
  });
});