"use strict";

const array = ["Mango", "Poly", "Ajax"];

const logItems = function (array) {

  for (let i = 0; i < array.length; i++) {
    console.log(`[${i + 1}] - [${array[i]}]`);
  }
};

logItems(array);

let correctArrayOfMessage = [];
const pricePerWord = 100;
let priceOfRing;

const calculateEngravingPrice = function (message, pricePerWord) {

  const arrFromMessage = message.split(" ");
  for (let word of arrFromMessage) {

    if (word) {
      correctArrayOfMessage.push(word);
    }
  }
  priceOfRing = correctArrayOfMessage.length * pricePerWord;
  return priceOfRing;
  //* alert(`Кінцева вартість ${priceOfRing}`);
};

// !calculateEngravingPrice(prompt("..."), pricePerWord);

const findLongestWord = function (string) {
  let longWord = string[0];
  const arrayFromString = string.split(" ");
  for (let word of arrayFromString) {
    if (longWord.length < word.length) {
      longWord = word;
    }
  }
  return longWord;
};

//! console.log(findLongestWord(prompt("...")));

const formatString = function (string) {
  // * Варіант через масив

  // string.split(' ');
  // let message = string[0];

  //   for (let i = 1; i < 40; i++) {
  //     message = message + string[i];
  //   }
  //   console.log(`${message}...`);

  //* Варіант без масиву
  let message;
  if (string.length > 40) {
    message = string.slice(0, 40);
    return `${message} ... `;
  } else {
    return `string`;
  }
};

//! console.log(formatString(prompt()));

const checkForSpam = function (message) {
  const arrayFromMessage = message.toLocaleLowerCase().split(" ");
  for (let i = 0; i < arrayFromMessage.length; i++) {
    if (arrayFromMessage[i] === "spam" || arrayFromMessage[i] === "sale") {
      return true;
    } else return false;
  }
};
// !console.log(checkForSpam(prompt()));

let input;
const num = [];

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

    sum(num);

    break;
  } else if (isNaN(Number(input))) {
    continue;
  } else {

    num.push(Number(input));
  }
}
//! alert(total);

