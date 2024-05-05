"use strict";

const hello = () => "Hello World!";
alert(hello());

const randomNum = Math.round(Math.random() * 100);
// console.log(randomNum);

const findNum = (randomNum) => {
  while (true) {
    let userNum = prompt("ur num");
    if (isNaN(Number(userNum))) {
      console.log(NaN);
      continue;
    } else if (userNum === null) {
      break;
    } else if (randomNum > Number(userNum)) {
      alert("more");
    } else if (Number(userNum) > randomNum) {
      alert("less");
    } else {
      alert("congrat");
      break;
    }
  }
};
//! findNum(randomNum);

const applyCallbackToEachElement = (arr, callback) => {
  let newArr = [];

  for (let num of arr) {
    newArr.push(callback(num));
  }
  return newArr;
};

const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

const calculateDiscountedPrice = (price, discount, callback) => {
  price = callback(price, discount);
  return price;
};
const showDiscountedPrice = (price, discount) => price - price / discount;
// alert(
//   `total price -  ${calculateDiscountedPrice(100, 10, showDiscountedPrice)} `
// );
