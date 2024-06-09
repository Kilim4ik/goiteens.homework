"use strict";

const array = ["Mango", "Poly", "Ajax"];

const logItems = function (array) {
  let i = 0;
  for (let elem of array) {
    i++;
    console.log(`[${i}] - [${elem}]`);
  }
};

logItems(array);

let correctArrayOfMessage = [];
const pricePerWord = 100;
let priceOfRing;

const calculateEngravingPrice = function (message, pricePerWord) {
  for (let word of message) {
    if (word) {
      correctArrayOfMessage.push(word);
    }
  }
  //   console.log(correctArrayOfMessage);
  priceOfRing = correctArrayOfMessage.length * pricePerWord;
  alert(`Кінцева вартість ${priceOfRing}`);
};

//! calculateEngravingPrice(prompt("...").split(" "), pricePerWord);

let theLongestWord = "";
const findLongestWord = function (string) {
  for (let word of string) {
    if (theLongestWord.length < word.length) {
      theLongestWord = word;
    }
  }
  console.log(theLongestWord);
};

//! findLongestWord(prompt("...").split(" "));
// * Варіант через масив

// const formatString = function (string) {
//   let message = string[0];

//   for (let i = 1; i < 40; i++) {
//     message = message + string[i];
//   }
//   console.log(`${message}...`);

//* Варіант без масиву

//   if (string.length > 40) {
//     message = string.slice(0, 40);
//     console.log(`${message}...`);
//   } else {
//     console.log(string);
//   }
// };
//

// !formatString(prompt().split(""));

const checkForSpam = function (message) {
  for (let i = 0; i < message.length; i++) {
    if (message[i] === "spam" || message[i] === "sale") {
      console.log(true);
      break;
    } else console.log(false);
  }
};

//! checkForSpam(prompt().toLocaleLowerCase().split(" "));

let input;
const numbers = [];
let total = 0;
const sum = function (array) {
  for (let num of array) {
    total = total + num;
  }
  alert(`Загальна сума чисел дорівнює ${total}`);
};
while (true) {
  input = prompt("!!!");
  if (input == null) {
    sum(numbers);
    break;
  } else if (isNaN(Number(input))) {
    continue;
  } else {
    numbers.push(Number(input));
  }
}
console.log(numbers);
