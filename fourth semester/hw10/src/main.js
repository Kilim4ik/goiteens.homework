"use strict";
const intervaltimer = () => {
  let id = 0;
  let timerId = setInterval(() => {
    id++;
    alert(id);
    if (id == 5) clearInterval(timerId);
  }, 1000);
};
// intervaltimer()

const animElems = () => {
  let scale = 1.5;

  const animatedBlock = document.querySelector(".block");
  let animateId = setInterval(() => {
    animatedBlock.style.transform = `scale(${scale})`;
    scale += 0.5;
  }, 2000);
};
// animElems()

const field = document.querySelector(".aim-game__field");
const target = document.querySelector(".aim-game__target");
const score = document.querySelector(".aim-game__score");
let isActive = false;
let userScore = 0;
const miniGame = () => {
  target.addEventListener("click", () => {
    isActive = true;
    userScore++;
    target.style.top = Math.random() * field.clientHeight + "px";
    target.style.left = Math.random() * field.clientWidth + "px";
  });
  if (!isActive) {
    const timerId = setInterval(() => {
      score.textContent = userScore;
      isActive = false;
      userScore = 0;
    }, 10000);
  }
};
// miniGame();

const timeController = () => {
  const seconds = prompt("Введіть час у секундах");
  if (!isNaN(seconds)) {
    const timeId = setTimeout(() => {
      alert("Спрацював таймер");
    }, seconds * 1000);
  }
};
timeController();
