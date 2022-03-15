// JavaScript Document
var hamburgerButton = document.querySelector("nav>a");
var nav = document.querySelector("nav ul");
var kruisButton = document.querySelector("nav li:first-of-type a");

hamburgerButton.addEventListener( //openen hamburgermenu
  "click",
  function () {
    nav.classList.toggle("open");
  },
  false
);

kruisButton.addEventListener( //sluiten hamburgermenu
  "click",
  function () {
    nav.classList.toggle("open");
  },
  false
);
