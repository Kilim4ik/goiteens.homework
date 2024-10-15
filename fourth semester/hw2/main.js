"use strict";

const input = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

input.addEventListener(
  "input",
  _.debounce((e) => {
    const val = e.target.value;
    img.style.transform = `scale(${1 + (val - 50) / 100}`;
  }, 1000)
);

const box = document.querySelector("#box");
document.addEventListener(
  "mousemove",
  _.debounce((e) => {
    box.style.top = `${e.clientY}px`;
    box.style.left = `${e.clientX}px`;
  }, 100)
);
