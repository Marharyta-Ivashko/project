// Cart quantity controls
document.querySelectorAll('.cart-qty-minus').forEach(btn => {
  btn.addEventListener('click', function () {
    const row = this.closest('tr');
    const display = row.querySelector('.cart-qty-display');
    const total = row.querySelector('.cart-row-total');
    const price = parseFloat(row.querySelector('td:nth-child(2) span').textContent.replace('$', ''));
    let qty = parseInt(display.textContent) || 1;
    if (qty > 1) {
      qty--;
      display.textContent = qty.toString().padStart(2, '0');
      total.textContent = '$' + (price * qty).toFixed(2);
    }
  });
});

document.querySelectorAll('.cart-qty-plus').forEach(btn => {
  btn.addEventListener('click', function () {
    const row = this.closest('tr');
    const display = row.querySelector('.cart-qty-display');
    const total = row.querySelector('.cart-row-total');
    const price = parseFloat(row.querySelector('td:nth-child(2) span').textContent.replace('$', ''));
    let qty = parseInt(display.textContent) || 1;
    qty++;
    display.textContent = qty.toString().padStart(2, '0');
    total.textContent = '$' + (price * qty).toFixed(2);
  });
});