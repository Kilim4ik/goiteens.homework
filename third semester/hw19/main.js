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
