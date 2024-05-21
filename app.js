//!Get the elements from DOM
const modal = document.querySelector(".modal");
const buyBtn = document.querySelector(".content-btn");
const modalXBtn = document.querySelector(".modal-x-btn");
const overlay = document.querySelector(".overlay");
const modalInput = document.querySelector(".modal-input");

//!Open modal
function open() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  modalInput.value = "";
}

//!Close modal
function close() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

//!Buy button, to open modal
buyBtn.addEventListener("click", open);

//!X button in modal to close
modalXBtn.addEventListener("click", close);

//!Overlay in background to close, when it is clicked to body
overlay.addEventListener("click", close);
