"use strict";

let input;
const numbers = [];
let total = 0;
const myAverageScore = (array) => {
  for (let num of array) {
    total = total + num;
  }
  let averageScore = total / array.length;
  if (averageScore >= 91 && averageScore <= 100) {
    console.log("My average score: A");
  } else if (averageScore >= 81 && averageScore <= 90) {
    console.log("My average score: B ");
  } else if (averageScore >= 71 && averageScore <= 80) {
    console.log("My average score: C ");
  } else {
    console.log("My average score: D ");
  }
};
const writeNum = () => {
  while (true) {
    input = prompt("!!!");
    if (input == null) {
      myAverageScore(numbers);
      break;
    } else if (isNaN(Number(input))) {
      continue;
    } else {
      numbers.push(Number(input));
    }
  }
  return numbers;
};
//! writeNum();

const logItems = (items) => {
  for (let elem of items) {
    console.log(elem);
  }
};

logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
logItems([1, 2, 3, 4, 5]);
logItems(["клавиатура", "наушники", "часы"]);

const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "aj4xth3m4n";
const findLogin = (userLogin, arrayOfLogins) => {
  let message;
  for (let login of arrayOfLogins) {
    if (login === userLogin) {
      message = `Користувач ${userLogin}  знайдено`;

      message;
      break;
    } else {
      message = `Користувач ${userLogin} не знайдено`;
    }
  }
  alert(message);
};
findLogin(loginToFind, logins);

const writeSmallesNum = () => {
  while (true) {
    input = prompt("!!!");
    if (input == null) {
      findSmallesNumber(numbers);
      break;
    } else if (isNaN(Number(input))) {
      continue;
    } else {
      numbers.push(Number(input));
    }
  }
  return numbers;
};

const findSmallesNumber = (numbers) => {
  let theSmallestNum = numbers[0];
  for (let num of numbers) {
    if (theSmallestNum > num) {
      theSmallestNum = num;
    }
  }
  alert(`Найменшим числом є - ${theSmallestNum}`);
};
//! writeSmallesNum();

const createURL = () => {
  const txt = prompt("txt").toLocaleLowerCase().split(" ");

  //* перебір був по словам
  // console.log(txt);

  let arr = [];
  for (let elem of txt) {
    if (elem) {
      arr.push(elem);
    }
  }
  console.log(arr.join("-"));
};
// !createURL();
