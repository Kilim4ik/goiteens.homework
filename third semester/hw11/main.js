"use strict";

const bankAccount = {
  ownerName: 1,
  accountNumber: 1,
  balance: 1,
};
// const num = Number(prompt("///"));

bankAccount.deposit = function (num) {
  if (isNaN(num)) {
    return;
  }
  bankAccount.balance += num;
}.bind(bankAccount);
bankAccount.withdraw = function (num) {
  if (isNaN(num)) {
    return;
  }
  bankAccount.balance -= num;
}.bind(bankAccount);

// !bankAccount.withdraw(num);
// !bankAccount.deposit(num);

console.log(bankAccount);

// const temperature = Number(prompt("///"));
const weather = {
  // temperature,
  humidity: 1,
  windSpeed: 1,
  isUpper0() {
    return this.temperature >= 0;
  },
};
console.log(weather);

const alertIsUpper = (callback) => {
  if (callback) {
    alert(">0");
  } else {
    alert("<0");
  }
};
//! alertIsUpper(weather.isUpper0());
const introducedName = "i";
//! const introducedEmail = prompt("email");
//! const introducedPassword = prompt("password");
const user = {
  name: "i",
  email: "email",
  password: "password",
};
user.login = (email, password) => {
  if (email !== introducedEmail) {
    alert(`${introducedEmail} не знайдено `);
    return false;
  }
  if (password !== introducedPassword) {
    alert(`${introducedPassword} - не правильний пароль`);
    return false;
  }

  alert("приємного користування!");
  return true;
};
// !user.login(user.email, user.password);

const movie = {
  title: "a",
  director: "a",
  year: 2022,
  rating: 8,
};
movie.isOK = () => movie.rating > 8;
const ifMovieOK = (callback) => {
  if (callback) {
    alert(`u should watching the ${movie.title}`);
  }
};
ifMovieOK(movie.isOK());
