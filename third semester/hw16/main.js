"use strict";

function Account({ login, email }) {
  this.login = login;
  this.email = email;
}
Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login} , email: ${this.email}`);
};
console.log(Account.prototype.getInfo); // function

const mango1 = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});
mango1.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly1 = new Account({
  login: "Poly",
  email: "poly@mail.com",
});
poly1.getInfo(); // Login: Poly, Email: poly@mail.com

class User {
  name;
  age;
  followers;
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}
const mango = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers

class Storage {
  items;
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    this.items = this.items.filter((product) => product !== item);
  }
}
const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

class StringBuilder {
  _value = ".";
  get value() {
    return this._value;
  }
  append(str) {
    this._value = this._value + str;
  }
  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}
const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='

//! -----------------
console.log("!!!!!!!!!!!!!!!!!!!!!!!");
class Car {
  speed;
  #price;
  maxSpeed;
  isOn;
  distance;

  static getSpecs(car) {
    console.log(car.maxSpeed, car.speed, car.isOn, car.distance, car.price);
  }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this.#price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */
  get price() {
    return this.#price;
  }
  set price(newPrice) {
    this.#price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + Number(value) < this.maxSpeed) this.speed += Number(value);
  }

  decelerate(value) {
    this.speed - value >= 0 ? (this.speed -= value) : (this.speed = 0);
  }
  drive(hours) {
    if (this.isOn) this.distance += hours * this.speed;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang);
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
