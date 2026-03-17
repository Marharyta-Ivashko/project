// Знаходимо батьківський контейнер
const cartContainer = document.querySelector('.cart-table-body') || document.body;

// Функція для перерахунку загальної суми (Subtotal)
function updateSubtotal() {
  const subtotalElement = document.getElementById('cart-subtotal');
  const singleRow = document.querySelector('#cart-items tr'); // Беремо перший (і єдиний) товар

  if (!subtotalElement || !singleRow) return;

  const price = parseFloat(singleRow.getAttribute('data-price')) || 0;
  const qtyDisplay = singleRow.querySelector('.cart-qty-display');
  const qty = parseInt(qtyDisplay.textContent, 10) || 1;

  // Рахуємо суму для товару
  subtotalElement.textContent = (price * qty).toFixed(2);
}

// Додаємо обробник подій для кнопок "плюс" та "мінус"
cartContainer.addEventListener('click', function (e) {
  // Перевіряємо, чи клік був по кнопці "плюс" або "мінус"
  const isMinus = e.target.closest('.cart-qty-minus');
  const isPlus = e.target.closest('.cart-qty-plus');
  if (!isMinus && !isPlus) return;
  const row = e.target.closest('tr');
  if (!row) return;
  const display = row.querySelector('.cart-qty-display');
  const total = row.querySelector('.cart-row-total');

  // Отримуємо ціну з data-price
  const price = parseFloat(row.getAttribute('data-price')) || 0;

  let qty = parseInt(display.textContent, 10) || 1;
  // Логіка зміни кількості
  if (isPlus) {
    qty++;
  } else if (isMinus && qty > 1) {
    qty--;
  } else {
    return;
  }
  // Оновлюємо DOM
  display.textContent = qty.toString().padStart(2, '0');
  total.textContent = '$' + (price * qty).toFixed(2);

  // Оновлюємо загальний Subtotal
  updateSubtotal();
});