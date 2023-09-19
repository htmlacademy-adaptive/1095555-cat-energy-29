const navToogle = document.querySelector('.main-nav__toogle');
const nav = document.querySelector('.main-nav');

// Убираем сразу с body класс no-js
if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

// Меняем класс у nav
function showNav() {
  nav.classList.toggle('main-nav--open');
}

// Проверяем, есть ли такой элемент на странице
if (navToogle) {
  navToogle.addEventListener('click', showNav);
}
