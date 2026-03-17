// ---- ФІЛЬТРИ РОЗМІРУ (Shop page) ----
const filterButtons = document.querySelectorAll('#size-filters .filter-size-btn');
const productItems = document.querySelectorAll('.product-item');

filterButtons.forEach(button => {
  button.addEventListener('click', function () {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    const selectedSize = this.getAttribute('data-filter');
    productItems.forEach(item => {
      const itemSize = item.getAttribute('data-size');
      if (selectedSize === 'all' || selectedSize === itemSize) {
        item.classList.remove('d-none');
      } else {
        item.classList.add('d-none');
      }
    });
  });
});

// ---- МІНІ-КАРТОЧКА ТОВАРУ ----

// Кількість товару (- / +)
const qtyMinus = document.getElementById('qty-minus');
const qtyPlus = document.getElementById('qty-plus');
const qtyInput = document.getElementById('qty-input');

if (qtyMinus && qtyPlus && qtyInput) {
  qtyMinus.addEventListener('click', () => {
    let val = parseInt(qtyInput.value) || 1;
    if (val > 1) qtyInput.value = val - 1;
  });
  qtyPlus.addEventListener('click', () => {
    qtyInput.value = (parseInt(qtyInput.value) || 1) + 1;
  });
}

// Перемикання головного фото через мініатюри
const thumbnails = document.querySelectorAll('.mini-card-thumbnails img');
const mainImg = document.querySelector('.flex-grow-1 img.object-fit-cover');

if (thumbnails.length > 0 && mainImg) {
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      mainImg.src = thumb.src;
    });
  });
}

// Вибір кольору
const colorSwatches = document.querySelectorAll('.color-swatch-ring');
if (colorSwatches.length > 0) {
  colorSwatches.forEach(sw => {
    sw.addEventListener('click', () => {
      colorSwatches.forEach(s => s.classList.remove('active'));
      sw.classList.add('active');
    });
  });
}

// Вибір розміру
const sizeBtns = document.querySelectorAll('.size-btn');
if (sizeBtns.length > 0) {
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}