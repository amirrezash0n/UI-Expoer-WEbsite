const navToggleIcon = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

navToggleIcon.addEventListener('click', function() {
    this.classList.toggle('hamburger-menu--open');
    menu.classList.toggle('menu--open');
});

const servicesTitle = document.querySelector(".services__title")

let servicesTitleTypewriter = new Typewriter(servicesTitle, {
  loop: true,
});

servicesTitleTypewriter

    .typeString("We Provide Best Quality Service")
    .pauseFor(2500)
    .deleteChars(20)
    .pauseFor(2500)

    .typeString("Superior Service")
    .pauseFor(2500)
    .deleteChars(16)

    .typeString("Premium Service")
    .pauseFor(2500)
    .deleteChars(15)

    .start();
