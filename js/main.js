// ============================
// main.js — точка входу
// Підключає всі модулі проєкту
// ============================
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', function () {
  window.scrollTo(0, 0);
});

import './modules/component-loader.js';
import './modules/deals-swiper.js';
import './modules/testimonials-swiper.js';
import './modules/timer.js';
import './modules/ratings.js';
import './modules/category-menu.js';
import './modules/shop.js';
import './modules/cart.js';