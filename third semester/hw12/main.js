"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const showUserStat = (obj) => {
  const userKeys = Object.keys(user);
  for (let elem of userKeys) {
    console.log(`${elem} : ${user[elem]}`);
  }
};
!showUserStat(user);

const countProps = (obj) => Object.entries(obj).length;
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

const findBestEmployee = (employees) => {
  let bestEmploee = Object.entries(employees)[0];
  for (let employee of Object.entries(employees)) {
    if (employee[1] > bestEmploee[1]) {
      bestEmploee = employee;
    }
  }
  return bestEmploee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

const countTotalSalary = (employees) => {
  const arrSalary = Object.values(employees);
  let total = 0;
  for (let num of arrSalary) {
    total += num;
  }
  return total;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const getAllPropValues = (arr, prop) => {
  const newArr = [];
  for (let elem of arr) {
    newArr.push(elem[prop]);
  }
  return newArr;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []

const calculateTotalPrice = function (allProdcuts, productName) {
  for (let product of allProdcuts) {
    if (product["name"] == productName) {
      return product["price"] * product["quantity"];
    }
  }
};

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроїд"));

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};


const idTransaction = Number(prompt("idTransaction"));

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    switch (type) {
      case "withdraw":
        account.withdraw(amount);
        break;
      case "deposit":
        account.deposit(amount);
        break;
    }
    account.transactions.push({
      amount,
      type,
      id: account.transactions.length + 1,
    });
  },

  deposit(amount) {
    account.balance += amount;
  },

  withdraw(amount) {
    if (account.balance > amount) {
      account.balance -= amount;
    }
  },

  getBalance() {
    alert(account.balance);
  },

  getTransactionDetails(id) {
    for (let transaction of account.transactions) {
      const transactionValue = Object.values(transaction);
      if (id == transactionValue[2]) {
        console.log(transaction);
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;

    for (let transaction of account.transactions) {
      const transactionValue = Object.values(transaction);
      if (type == transactionValue[1]) {
        total += transactionValue[0];
      }
    }
    console.log(total);
  },
};
//! account.createTransaction(200, "deposit");

//! account.createTransaction(100, "withdraw");
//! account.getTransactionDetails(idTransaction);
// console.log("-------");
//! account.getTransactionTotal("withdraw");
//! console.log(account.transactions);
//! console.log(account.balance);
