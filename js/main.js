"use strict";

const button = document.querySelector(".main__button");
const modal = document.querySelector(".modal");
const iks = document.querySelector(".icon-iks");

button.addEventListener("click", () => {
modal.style.display = "block"
modal.style.transitionDuration = "1000ms"
})

iks.addEventListener("click", () => {
  modal.style.display = "none"
  
});




