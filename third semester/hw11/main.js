"use strict";

const bankAccount = {
  ownerName: 1,
  accountNumber: 1,
  balance: 1,
};
bankAccount.deposit = (num) => {
  num = Number(prompt("///"));
  if (isNaN(num)) {
    this.deposit();
  }
  bankAccount.balance += num;
  //? чому не прауює через this ?
  // this.balance += num;
};
bankAccount.withdraw = (num) => {
  num = Number(prompt("///"));
  if (isNaN(num)) {
    this.withdraw();
  }
  bankAccount.balance -= num;
  //? чому не прауює через this ?
  // this.balance += num;
};
//! bankAccount.withdraw();
//! bankAccount.deposit();
console.log(bankAccount);

//! const temperature = Number(prompt("///"));
const weather = {
  //   temperature,
  humidity: 1,
  windSpeed: 1,
};
const isUpper0 = (temp) => {
  if (temp >= 0) {
    return true;
  } else {
    return false;
  }
};

weather.alert = (callback) => {
  if (callback == true) {
    alert(">0");
  } else {
    alert("<0");
  }
};
// !weather.alert(isUpper0(weather.temperature));
const introducedName = "i";
//! const introducedEmail = prompt("email");
// !const introducedPassword = prompt("password");
const user = {
  name: "i",
  email: "email",
  password: "password",
};
user.login = (email, password) => {
  if (email !== introducedEmail) {
    alert(`${introducedEmail} не знайдено `);
    return false;
  } else if (password !== introducedPassword) {
    alert(`${introducedPassword} - не правильний пароль`);
    return false;
  } else {
    alert("приємного користування!");
    return true;
  }
};
//! user.login(user.email, user.password);

const movie = {
  title: "a",
  director: "a",
  year: 2022,
  rating: 8,
};
movie.isOK = () => {
  if (movie.rating > 8) {
    return true;
  } else {
    return false;
  }
};
const ifMovieOK = (callback) => {
  if (callback) {
    alert(`u should watching the ${movie.title}`);
  }
};
ifMovieOK(movie.isOK());
