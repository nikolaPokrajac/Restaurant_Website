const menu = document.querySelector('.navigation__menu');
const overlay = document.querySelector('.navigation__overlay');
const navLink = document.querySelectorAll('.navigation__link');

menu.addEventListener('click', function() {
  menu.classList.toggle('active');
  overlay.classList.toggle('menu-open');
});

for (i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', function() {
    menu.classList.remove('active');
    overlay.classList.remove('menu-open');
  });
}
