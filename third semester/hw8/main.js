"use srtict";

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

let string = "";
for (let i = 0; i < friends.length; i++) {
  if (i < friends.length - 1) {
    string += friends[i] + ",";
  } else {
    string += friends[i];
  }
}
console.log(string);
string = friends.join(",");
console.log(string);

// const cards = [
//   "Карточка-1",
//   "Карточка-2",
//   "Карточка-3",
//   "Карточка-4",
//   "Карточка-5",
// ];
// const caratoRemane = "Карточка-3";
// const cardIaInsert = "Карточка-6";
// const cardIoUpdate = "Карточка-4";
// cards.splice(cards.indexOf(caratoRemane), 1);
// console.log(cards);

// cards.splice(cards.length, 0, cardIaInsert);
// console.log(cards);

// cards.splice(cards.indexOf(cardIoUpdate), 1, "Карточка-нова");
// console.log(cards);

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];
const getAllNames = (arr) => {
  let newArr = [];
  for (let elem of arr) {
    newArr.push(elem.name);
  }
  return newArr;
};
!console.log(getAllNames(friends));
