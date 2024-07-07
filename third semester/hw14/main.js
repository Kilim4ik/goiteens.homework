"use strict";

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
const getUserNames = users.map(({ name }) => name);
console.log(getUserNames);

// let color = prompt("color");
const color = "brown";
const getUsersWithEyeColor = users
  .map((user) => {
    if (color == user.eyeColor) return user.name;
  })
  .filter((user) => user != undefined);
console.log(getUsersWithEyeColor);

const genderForCheck = "male";
const getUsersWithGender = users
  .map((user) => {
    if (genderForCheck == user.gender) return user.name;
  })
  .filter((user) => user != undefined);

console.log(getUsersWithGender);

const getInactiveUsers = users.filter(({ isActive }) => !isActive);
console.log(getInactiveUsers);

const emailForCheck = "sharlenebush@tubesys.com";
const getUserWithEmail = users.find(({ email }) => email === emailForCheck);
console.log(getUserWithEmail);

const min = 30;
const max = 100;
const getUsersWithAge = users.filter(({ age }) => age >= min && age <= max);
console.log(getUsersWithAge);

const calculateTotalBalance = users.reduce((total, { balance }) => {
  total += balance;
  return total;
}, 0);
console.log(calculateTotalBalance);

const friendForCheck = "Briana Decker";
const getUsersWithFriend = users.reduce((acc, { name, friends }) => {
  if (friends.includes(friendForCheck)) {
    acc.push(name);
  }
  return acc;
}, []);
console.log(getUsersWithFriend);

const getNamesSortedByFriendsCount = users.sort(
  (min, max) => min.friends.length - max.friends.length
);
console.log(getNamesSortedByFriendsCount);

//! ідея - https://www.youtube.com/watch?v=mCIRO7gCuEk&ab_channel=WebDev%D1%81%D0%BD%D1%83%D0%BB%D1%8F.%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%9B%D1%83%D1%89%D0%B5%D0%BD%D0%BA%D0%BE
const getSortedUniqueSkills = users
  .map(({ skills }) => skills)
  .reduce((acc, arr) => acc.concat(arr), [])
  .reduce((acc, skil) => (acc.includes(skil) ? acc : [...acc, skil]), []);
console.log(getSortedUniqueSkills);
