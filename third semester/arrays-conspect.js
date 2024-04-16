// пустий масив
const array = [];
console.log(array);
// масив з елементами
const clients = ["Vasya", "Petya", "Kolya"];
console.log(clients[0]);
console.log(clients[1]);
console.log(clients[2]);

console.log(clients[2]);

clients[2] = "Ilona";
clients[3] = "Stanislav";

console.log(clients);
console.log(clients.length);

const list = ["Vasya", "Petya", "Kolya", "Masha", "Sasha", "Dima"];
// перебір масив
for (let i = 0; i < list.length; i += 1) {
  console.log(list[i]);
}
// запушимо елемент
for (let i = 0; i < 4; i += 1) {
  array.push(`text${i}`);
}
console.log(array);

const lists = ["Vasya", "Petya", "Kolya", "Masha", "Sasha", "Dima"];
for (const i of lists) {
  console.log(i);
}
// let message;
// for (const i of lists) {
//   if (i === "Kolya") {
//     message = "+";
//     break;
//   } else message = "-";
// }
// console.log(message);

const nums = [
  1, 3, 52, 24, 14, 12, 8, 3, 90, 65, 76, 7, 3, 2, 94, 36, 16, 15, 19, 23, 43,
  29,
];
const item = 15;
let message;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] < item) {
    continue;
  }
  console.log(`${item} > ${nums[i]}`);
}

const arrays = [
  [1, 2, 3],
  ["1", "2", "3"],
  [100, 200, 300],
];
console.log(arrays[2][1]);
