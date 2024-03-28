"use strict";
const result = 5 + 5 + "5";
console.log(typeof result , result);

const email = "lavrovskiy.danya@gmail.com";
console.log(email.includes("@"));
console.log(email.length);

const textMy = "My ";
const textName = "name ";
const textIs = "is ";
let fullName = textMy + textName + textIs;
fullName = fullName + "Viktor";
console.log(fullName);

const userName = 'Гріша';
const payment = Math.floor(Math.random()*(10-0)-0)
console.log(`Дякуємо , ${userName} ! До сплати ${payment} гривень` )
