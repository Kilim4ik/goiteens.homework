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

// let message = prompt("...").split(" ");
let correctArrayOfMessage = [];
const pricePerWord = 100;
let priceOfRing;
// console.log(message);

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

// calculateEngravingPrice(message, pricePerWord);

// const string = prompt("...").split(" ");
let theLongestWord = "";
const findLongestWord = function (string) {
  for (let word of string) {
    if (theLongestWord.length < word.length) {
      theLongestWord = word;
    }
  }
  console.log(theLongestWord);
};
findLongestWord(string);
