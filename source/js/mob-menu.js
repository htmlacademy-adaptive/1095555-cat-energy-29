let navToogle = document.querySelector(".main-nav__toogle");
let siteListWrapper = document.querySelector(".main-nav__site-list-wrapper");
let mapIframe = document.querySelector(".map-iframe");

function showNav() {
  navToogle.classList.toggle('main-nav__toogle--open');
  siteListWrapper.classList.toggle('main-nav__site-list-wrapper--open');
}

window.onload = function() {
  siteListWrapper.classList.remove('main-nav__site-list-wrapper--no-js');
  mapIframe.style.display = "block";
};


navToogle.addEventListener( 'click', showNav);
