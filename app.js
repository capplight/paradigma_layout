const arrow = document.querySelector(".arrow");
const btnPrice = document.querySelector(".btn-price");
const arrowDown = document.getElementById("arrow-down");
const popupContainer = document.getElementById("popup-container");
const closeButton = popupContainer.querySelector("img");
const input = document.querySelector(".tell-input");
const checkbox = document.querySelector(".checkbox");
const button = document.querySelector("#submit");
const popupBox = document.querySelector(".popup-box");
const submitBox = document.querySelector(".submit-box");

//Arrow rotation logic
btnPrice.addEventListener("mousedown", () => {
  arrow.classList.add("rotate");
});

btnPrice.addEventListener("mouseup", () => {
  arrow.classList.remove("rotate");
});

//Pop up box logic
arrowDown.addEventListener("click", () => {
  popupContainer.style.display = "block";
  document.body.classList.add("dark-background");
});

document.addEventListener("click", (event) => {
  if (
    event.target !== popupContainer &&
    !popupContainer.contains(event.target) &&
    event.target !== arrowDown
  ) {
    popupContainer.style.display = "none";
    document.body.classList.remove("dark-background");
  }
});

//input logic
input.addEventListener("focus", () => {
  const val = localStorage.getItem("phoneNumber") || "+7";
  input.value = val;
  input.setSelectionRange(3, 3);
});

input.addEventListener("input", () => {
  const val = input.value;
  if (val.length > 12) {
    input.value = val.slice(0, 12);
  }
  localStorage.setItem("phoneNumber", input.value);
});

input.addEventListener("click", () => {
  input.setSelectionRange(3, 3);
});

button.addEventListener("click", () => {
  let val = input.value;
  if (checkbox.checked && val.length === 12) {
    button.disabled = false;
    popupBox.style.display = "none";
    submitBox.style.display = "block";
    localStorage.clear();
  } else {
    button.disabled = true;
  }
});

document.addEventListener("click", (event) => {
  if (event.target === popupContainer || event.target === closeButton) {
    popupContainer.style.display = "none";
    document.body.classList.remove("dark-background");
    submitBox.style.display = "none";
    popupBox.style.display = "block";
  } else if (
    event.target !== submitBox &&
    !submitBox.contains(event.target) &&
    event.target !== button &&
    event.target !== input
  ) {
    submitBox.style.display = "none";
    popupBox.style.display = "block";
  }
});

//toggle menu
if (window.matchMedia("(min-width: 992px)").matches) {
  const toggleMenu = document.querySelector(".logo");

  toggleMenu.addEventListener("click", function () {
    console.log("hello");
  });
}
