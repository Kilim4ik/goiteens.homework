let temperatureCelsius = Math.round(Math.random() * (100 + 100) - 100);
const temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;
console.log(temperatureFahrenheit);

let daysInMonth = 30;
console.log(
  "Кількість годин у місяці:",
  daysInMonth * 24,
  "Кількість хвилин у місяці :",
  daysInMonth * 24 * 60
);

let healthPoint = 100;
let energyPoint = 100;
const energySprint = Math.round(Math.random() * (11 + 0) - 0);
console.log(healthPoint - Math.round(Math.random() * (101 + 0) - 0) + "+");
console.log(energyPoint - energySprint + "⚡");

let priceOfPhone = 500 + "$";
let discount = 10;
const priceAfterDiscount = (parseInt(priceOfPhone) / 100) * (100 - discount);
console.log(priceAfterDiscount + "$");

let randomNumber = Math.random() * (101 + 0) - 0;
console.log(Math.floor(randomNumber));

// const task6 = toString(Math.random() * (11 + 0) - 0);
const task6 = "17.45kfkewhfk";
console.log(parseFloat(task6));

const task7 = "17.45kfkewhfk";
console.log(parseInt(task7));

let numberForSqrt = Math.floor(Math.random() * (501 + 0) - 0);
numberForSqrt = Math.sqrt(numberForSqrt);
console.log(numberForSqrt);

let numberSrting = (Math.random() * (101 + 0) - 0).toString();
let numberNumber = Math.random() * (101 + 0) - 0;
numberSrting = parseInt(numberSrting);
numberNumber= numberNumber.toString();
console.log(numberSrting , typeof numberSrting);
console.log(numberNumber , typeof numberNumber);
