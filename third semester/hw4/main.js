"use strict";

const shortName = prompt("ur short name");
const fullName = prompt("ur full name");
if (shortName != null && fullName != null) {
  alert("Обидва поля заповнені");
} else {
  alert("Не всі поля заповненi");
}

// const fstNum = prompt("Перше число");
// const sndNum = prompt("Друге число");
// if (Number(fstNum) && Number(sndNum) != NaN) {
//   const sum = Number(fstNum) + Number(sndNum);
//   if (sum > 10) {
//     alert("Сума більша за 10");
//   } else {
//     alert("Сума менша або дорівнює 10");
//   }
// } else {
//   alert("Ти бомбом? Треба було числа");
// }

const fstNum = Number(prompt("Перше число"));
const sndNum = Number(prompt("Друге число"));
if (isNaN(fstNum) || isNaN(sndNum)) {
  alert("Ти бомбом? Треба було числа");
} else if (fstNum + sndNum > 10) {
  alert("Сума більша за 10");
} else {
  alert("Сума менша або дорівнює 10");
}

let userInput = prompt("Введіть текст...");
userInput = userInput.trim().toLocaleLowerCase();
if (userInput == "javascript") {
  alert("Текст містить слово JavaScript");
} else {
  alert("Текст не містить слово JavaScript");
}

const num = Number(prompt("enter number ... "));
if (!isNaN(num) && num >= 10 && num <= 20) {
  alert("Число входить в діапазон від 10 до 20");
} else {
  alert("Число не входить в діапазон від 10 до 20");
}

const userName = prompt("ur name");
const userMail = prompt("email");
const userPassword = prompt("password");
if (
  userName.length >= 3 &&
  userMail.includes("@") &&
  userPassword.length >= 6
) {
  alert("Коректно заповнені дані");
} else {
  alert("fail");
}
