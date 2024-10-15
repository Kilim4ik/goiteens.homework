"use strict";
let minuts = 1.5 * 60;
const timeID = setInterval(() => {
  if (minuts == 30) alert(`лишилось ${minuts} хвилин`);
  //чи не має конфліктувати алерт з асинхроністю ? Якшо не закривати вікно
  if (!minuts) alert("час вичерпано");
  minuts--;
  clearInterval(timeID);
}, 60 * 1000);

const buttonStart = document.querySelector(".start");
const buttonStop = document.querySelector(".stop");
const timerContent = document.querySelector(".timer");
let seconds = 30;
let timerID = undefined;
const timer = () => {
  timerContent.textContent = "";
  return setInterval(() => {
    console.log(seconds);
    if (seconds <= 10) timerContent.textContent = "!!!";
    if (seconds <= 0) {
      timerContent.textContent = "Час вичерпано";
      buttonStart.classList.add("anim");
      setTimeout(() => {
        buttonStart.classList.remove("anim");
      }, 3000);
      clearInterval(timerID);
      timerID = undefined;
      seconds = 30;
    }
    seconds -= 0.01;
  }, 10);
};
buttonStart.addEventListener("click", () => {
  if (!timerID) timerID = timer();
});
buttonStop.addEventListener("click", () => {
  clearInterval(timerID);
  timerID = undefined;
});
