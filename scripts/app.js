const navToggleIcon = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

navToggleIcon.addEventListener('click', function() {
    this.classList.toggle('hamburger-menu--open');
    menu.classList.toggle('menu--open');
});