"use strict";
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
  str;
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
  get value() {
    return this._value;
  }
}
const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
