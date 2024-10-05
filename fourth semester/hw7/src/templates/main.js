"use strict";
const users = [
  {
    name: "Emily",
    lastName: " Johnson",
    age: 28,
    photo: null,
  },
  {
    name: " Michael",
    lastName: " Smith",
    age: 34,
    photo: null,
  },
  {
    name: "Sarah",
    lastName: "Williams",
    age: 25,
    photo: null,
  },
  {
    name: "David",
    lastName: "Brown",
    age: 42,
    photo: null,
  },
  {
    name: "Olivia",
    lastName: "Taylor",
    age: 31,
    photo: null,
  },
  {
    name: "James",
    lastName: "Miller",
    age: 29,
    photo: null,
  },
  {
    name: "Sophia",
    lastName: "Davis",
    age: 23,
    photo: null,
  },
  {
    name: "Benjamin",
    lastName: "Wilson",
    age: 36,
    photo: null,
  },
  {
    name: "Danylo",
    lastName: "Nutella",
    age: 24,
    photo: null,
  },
];

// import menuTemplate from "./template.hbs";
console.log(11);
console.log(menuTemplate);
const userTemblate = {
  title: "our users",
  users: users,
};
const markup = menuTemplate(userTemblate);
document.querySelector(".users-section").innerHTML = markup;
