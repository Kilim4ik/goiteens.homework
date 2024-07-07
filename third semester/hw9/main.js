"use strict";

const array = ["Mango", "Poly", "Ajax"];

const logItems = function (array) {
<<<<<<< HEAD
  let i = 0;
  for (let elem of array) {
    i++;
    console.log(`[${i}] - [${elem}]`);
=======
  for (let i = 0; i < array.length; i++) {
    console.log(`[${i + 1}] - [${array[i]}]`);
>>>>>>> c4165165bfcc23063ae4240c19cfaeff5b2e87b2
  }
};

logItems(array);

let correctArrayOfMessage = [];
const pricePerWord = 100;
let priceOfRing;

const calculateEngravingPrice = function (message, pricePerWord) {
<<<<<<< HEAD
  for (let word of message) {
=======
  const arrFromMessage = message.split(" ");
  for (let word of arrFromMessage) {
>>>>>>> c4165165bfcc23063ae4240c19cfaeff5b2e87b2
    if (word) {
      correctArrayOfMessage.push(word);
    }
  }
<<<<<<< HEAD
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
=======
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
>>>>>>> c4165165bfcc23063ae4240c19cfaeff5b2e87b2
let total = 0;
const sum = function (array) {
  for (let num of array) {
    total = total + num;
  }
<<<<<<< HEAD
  alert(`Загальна сума чисел дорівнює ${total}`);
=======
  return total;
>>>>>>> c4165165bfcc23063ae4240c19cfaeff5b2e87b2
};
while (true) {
  input = prompt("!!!");
  if (input == null) {
<<<<<<< HEAD
    sum(numbers);
=======
    sum(num);
>>>>>>> c4165165bfcc23063ae4240c19cfaeff5b2e87b2
    break;
  } else if (isNaN(Number(input))) {
    continue;
  } else {
<<<<<<< HEAD
    numbers.push(Number(input));
  }
}
console.log(numbers);
=======
    num.push(Number(input));
  }
}
//! alert(total);
>>>>>>> c4165165bfcc23063ae4240c19cfaeff5b2e87b2
