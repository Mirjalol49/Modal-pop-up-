//!Get the elements from DOM
const modal = document.querySelector(".modal");
const buyBtn = document.querySelector(".content-btn");
const modalXBtn = document.querySelector(".modal-x-btn");
const overlay = document.querySelector(".overlay");
const modalInput = document.querySelector(".modal-input");

//Open modal
function open() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  modalInput.value = "";
}

//Close modal
function close() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

buyBtn.addEventListener("click", open);

modalXBtn.addEventListener("click", close);

overlay.addEventListener("click", close);
