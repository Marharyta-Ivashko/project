// Активний стан для меню категорій ("New Arrivals")
const navLinks = document.querySelectorAll('#categoryMenu .nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    navLinks.forEach(item => item.classList.remove('active', 'dark'));
    this.classList.add('active', 'dark');
  });
});
