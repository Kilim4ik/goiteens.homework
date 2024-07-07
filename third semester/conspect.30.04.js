"use strict";

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};
//* for in
//* for(key in obj){}
for (let key in feedback) {
  console.log(key);
  console.log(feedback[key]);
}
//* const keys = Object.keys(feedback);
// console.log(keys);

//* const values = Object.values(feedback);
// console.log(values);

//* const entries = Object.entries(feedback);
// console.log(entries);

//* перебір об.

const hotel = {
  name: "hilton",
  stars: 5,
  capacity: 99,
};

const keyObj = Object.keys(hotel);
for (const key of keyObj) {
  console.log(hotel[key]);
}
const clas = {
  Andrii: 100,
  Stas: 80,
  Olha: 99,
};
const values = Object.values(clas);
let total = 0;
for (const value of values) {
  total += value;
}
console.log(total);
//*spread

const temps = [18, 14, 12, 21, 17, 29, 24];
const spread = [...temps];
// console.log(spread);

const min = Math.min(...temps);
// console.log(min);

const hogwards = ["fleanfwefwefw", "wnoefnoew", "eowhfow", "fweihfiowh"];
// const copyOfHogwards = [...hogwards, "fwel/gf"];
// console.log(copyOfHogwards === hogwards);
console.log(hogwards);
// console.log(copyOfHogwards);
const contain = [...hogwards, ...temps];
console.log(contain);
const copyOfHogwards = [...hogwards.slice(0, 2)];
console.log(copyOfHogwards);

//* розпилення обʼєктів
const b = { x: 3, y: 4 };
const a = { x: 1, m: 2 };

const c = Object.assign({}, a, b);
const z = { ...a, ...b, m: 10 };
console.log(z);
console.log(c);
