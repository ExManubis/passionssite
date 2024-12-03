// CONSTANTS
const burgerIcon = document.querySelector(".burger_icon");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

// EVENTLISTENERS
burgerIcon.addEventListener("click", burgerClick);

// FUNCTIONS
function burgerClick() {
  nav.classList.toggle("active");
}
