let navToogle = document.querySelector(".main-nav__toogle");
let siteListWrapper = document.querySelector(".main-nav__site-list-wrapper");


function showNav() {
  navToogle.classList.toggle('main-nav__toogle--open');
  siteListWrapper.classList.toggle('main-nav__site-list-wrapper--open');
}



navToogle.addEventListener( 'click', showNav);


//console.log('aaa');
