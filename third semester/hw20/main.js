"use strict";

const gallery = document.querySelector(".gallery");
const arrLI = gallery.children;
let galleryIndex = 0;

//! що з іншими фото робити не розумію

document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowRight") {
    next();
  }
  if (e.code == "ArrowLeft") {
    prev();
  }
});

function next() {
  arrLI[galleryIndex].classList.remove("full-image");
  galleryIndex++;
  if (galleryIndex == arrLI.length) galleryIndex = 0;
  arrLI[galleryIndex].classList.add("full-image");
}
function prev() {
  if (galleryIndex == 0) {
    arrLI[0].classList.remove("full-image");
    galleryIndex = arrLI.length - 1;
    arrLI[galleryIndex].classList.add("full-image");
  } else {
    arrLI[galleryIndex].classList.remove("full-image");
    galleryIndex--;
    arrLI[galleryIndex].classList.add("full-image");
  }
}

const render = document.querySelector("[data-action='render']");
const destroy = document.querySelector("[data-action= 'destroy']");
const number = document.querySelector("[type='number']");
const boxes = document.querySelector("#boxes");
let boxCount = 0;
render.addEventListener("click", () => creatBoxes(number.value));
destroy.addEventListener("click", () => destroyBoxes());

function creatBoxes(amount) {
  let code = ``;
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
    const [r, g, b] = randomColor();
    code += `<div style="width: ${width}px; height: ${height}px; background-color:rgb(${r} , ${g} , ${b});"></div>`;
    width += 10;
    height += 10;
  }
  boxes.innerHTML = code;
}
function randomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return [r, g, b];
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
