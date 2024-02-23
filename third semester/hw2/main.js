let temperatureCelsius = Math.round(Math.random() * (100 - 100) + 100);
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
const energySprint = Math.round(Math.random() * (11 - 0) + 0);
console.log(healthPoint - Math.round(Math.random() * (101 - 0) + 0) + "+");
console.log(energyPoint - energySprint + "⚡");

let priceOfPhone = Math.round(Math.random() * (1100 - 150) + 150);
let discount = 10;
const priceAfterDiscount = Math.ceil((priceOfPhone / 100) * (100 - discount));
console.log(priceAfterDiscount + "$");

let randomNumber = Math.random() * (101 - 0) + 0;
console.log(Math.floor(randomNumber));

const numFloat = "17.45kfkewhfk";
console.log(parseFloat(numFloat));

const numInt = "17.45kfkewhfk";
console.log(parseInt(numInt));

let numberForSqrt = Math.floor(Math.random() * (501 - 0) + 0);
numberForSqrt = Math.sqrt(numberForSqrt);
console.log(numberForSqrt);

let numberSrting = (Math.random() * (101 - 0) + 0).toString();
let numberNumber = Math.random() * (101 - 0) + 0;
numberSrting = parseInt(numberSrting);
numberNumber = numberNumber.toString();
console.log(numberSrting, typeof numberSrting);
console.log(numberNumber, typeof numberNumber);
