
'use strict';

(function () {
  let hamburger = document.querySelector('.header__upper-hamb');
  let cross = document.querySelector('.header__upper-cross');
  let nav = document.querySelector('.nav--header');
  let upperHeader = document.querySelector('.header__upper');

  hamburger.addEventListener('click', onDisplayNav);
  cross.addEventListener('click', onCloseNav);

  function onDisplayNav() {
    nav.style.display = 'block';
    hamburger.style.display = 'none';
    cross.style.display = 'block';
  }
  function onCloseNav() {
    nav.style.display = 'none';
    hamburger.style.display = 'block';
    cross.style.display = 'none';
  }
})();