"use strict";
let minutes = 1 * 60;
const timeID = setInterval(() => {
  if (minutes == 30) alert(`лишилось ${minutes} хвилин`);
  //чи не має конфліктувати алерт з асинхроністю ? Якшо не закривати вікно
  if (!minutes) alert("час вичерпано");
  minutes--;
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
    if (seconds <= 10) buttonStart.classList.add("anim");
    if (seconds <= 0) {
      timerContent.textContent = "Час вичерпано";
      buttonStart.classList.remove("anim");
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
