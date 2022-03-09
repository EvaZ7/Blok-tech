// JavaScript Document
var hamburgerButton = document.querySelector("nav>a");
var nav = document.querySelector("nav ul");
var kruisButton = document.querySelector("nav li:first-of-type a");


hamburgerButton.addEventListener("click", function() {
    nav.classList.toggle("open");
  
}, false)

kruisButton.addEventListener("click", function() {
    nav.classList.toggle("open");
  
}, false)