// CONSTANTS
const burgerIcon = document.querySelector(".burger_icon");
const nav = document.querySelector("nav");
const exit = document.querySelector(".exit_icon");

// EVENTLISTENERS
burgerIcon.addEventListener("click", burgerClick);
exit.addEventListener("click", burgerClick);

// FUNCTIONS
function burgerClick() {
  nav.classList.toggle("active");
  burgerIcon.classList.toggle("active");
  exit.classList.toggle("active");
}
