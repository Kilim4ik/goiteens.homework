"use strict";
const modalOpenButton = document.querySelector("[data-action='open-modal']");
const modalCloseButton = document.querySelector("[data-action='close-modal']");
modalOpenButton.addEventListener("click", () => dinamicModal());
function dinamicModal() {
  document.querySelector("body").classList.add("show-modal");
  document.addEventListener("click", (e) => {
    console.log(e.target.className);
    if (e.target.className == "backdrop")
      document.querySelector("body").classList.remove("show-modal");
  });
  modalCloseButton.addEventListener("click", () =>
    document.querySelector("body").classList.remove("show-modal")
  );
}
const arrEvent = document.querySelectorAll("[type='radio']");
for (let elem of arrEvent) {
  elem.addEventListener(
    "input",
    (e) =>
      (document.querySelector("body").style.backgroundColor = e.target.value)
  );
}
console.log(document.querySelectorAll("[type='radio']"));

const userName = document.querySelector("#name-output");
const userNameInput = document.querySelector("#name-input");
userNameInput.addEventListener("input", () => {
  userName.innerHTML = userNameInput.value;
});

const validation = document.querySelector("#validation-input");
validation.addEventListener("blur", () => isValid());
function isValid() {
  if (validation.value.length == validation.dataset.length) {
    validation.classList.remove("invalid");
    validation.classList.add("valid");
  } else {
    validation.classList.remove("valid");
    validation.classList.add("invalid");
  }
}
console.log(validation);

const control = document.querySelector("#font-size-control");
let size = 14;

control.addEventListener("change", () => {
  size = document.querySelector("#font-size-control").value;
  document.querySelector("#text").style.fontSize = `${size}px`;
  //   document.querySelector("#text").style.color = "red";
  //   console.log(size);
});
