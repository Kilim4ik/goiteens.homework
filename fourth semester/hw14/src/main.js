"use strict";
const genDelay = () => Math.random() * 10000;
console.log(genDelay());
const delayedPromise = (des, delay) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(des);
      rej("error in 999 line index.js");
    }, delay);
  });
};
const promiseArr = [
  delayedPromise("return", genDelay()),
  delayedPromise("accepted", genDelay()),
  delayedPromise("fullfield", genDelay()),
  delayedPromise("continue", genDelay()),
  delayedPromise({ login: "login", password: "password" }, genDelay()),
];

Promise.all(promiseArr).then((result) =>
  result.forEach((elem) => console.log(elem))
);

const randomDelay = (des) => {
  return new Promise((res) => {
    setTimeout(res(des), Math.random() * (50000 - 1000) + 1000);
  });
};

const raceArr = [
  randomDelay("return"),
  randomDelay("accepted"),
  randomDelay("continue"),
  randomDelay("fullfield"),
  randomDelay("last promise"),
];
Promise.race(raceArr).then((res) => console.log(res));
