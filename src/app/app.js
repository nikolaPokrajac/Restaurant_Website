const menu = document.querySelector('.navigation__menu');
const overlay = document.querySelector('.navigation__overlay');
const navLink = document.querySelectorAll('.navigation__link');
const nav = document.querySelector('.navigation__nav');

// Opening and closing hamburger menu
menu.addEventListener('click', function() {
  menu.classList.toggle('active');
  overlay.classList.toggle('menu-open');
});

// Closing hamburger menu after clicking on a nav link
for (i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', function() {
    menu.classList.remove('active');
    overlay.classList.remove('menu-open');
  });
}

// Sticky nav
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 600) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }
});
