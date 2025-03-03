const hamburger = document.querySelector('.nav__hamburger');
const body = document.querySelector('body');
const nav = document.querySelector('.nav__list');
let menuActive = false;


const changeMenuStatus = () => {
  menuActive = !menuActive;
  changeMenu();
}

const changeMenu = () => {
  if(menuActive){
    hamburger.setAttribute('src', './src/images/icon-menu-close.svg');
  } else{
    hamburger.setAttribute('src', './src/images/icon-menu.svg');
  }
  nav.classList.toggle('nav__list--active');
  body.classList.toggle('body--active');
}

hamburger.addEventListener('click', changeMenuStatus);

