"use srtict ";
const listCategories = document.querySelector("#categories");
console.log(`${listCategories.childElementCount} категорії `);

for (let child of listCategories.children) {
  console.log(
    `${child.firstElementChild.textContent} містить ${child.lastElementChild.children.length} пункти`
  );
}

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const tegsList = ingredients.map((elem) => {
  const li = document.createElement("li");
  li.textContent = elem;
  return li;
});
document.querySelector("#ingredients").append(...tegsList);

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

let newCode = "";
for (let img of images) {
  newCode += `<img src= ${img.url} alt= ${img.alt}>`;
}
document.querySelector("#gallery").insertAdjacentHTML("afterbegin", newCode);

let counterValue = 0;

//* +
document
  .querySelector('button[data-action ="decrement"]')
  .addEventListener("click", decrement);
function decrement() {
  if (counterValue) counterValue--;
  changeValue();
}

//* -
document
  .querySelector('button[data-action ="increment"]')
  .addEventListener("click", increment);
function increment() {
  counterValue++;
  changeValue();
}
function changeValue() {
  document.querySelector("#value").textContent = counterValue;
}

const userName = document.querySelector("#name-output");
const userNameInput = document.querySelector("#name-input");
userNameInput.addEventListener("input", () => {
  userName.innerHTML = userNameInput.value;
});

const validation = document.querySelector("#validation-input");
validation.addEventListener("blur", () => isValid());
function isValid() {
  if (validation.value.length == validation.dataset.length) {
    validation.classList.remove("invalid");
    validation.classList.add("valid");
  } else {
    validation.classList.remove("valid");
    validation.classList.add("invalid");
  }
}
console.log(validation);

const control = document.querySelector("#font-size-control");
let size = 14;

control.addEventListener("change", () => {
  size = document.querySelector("#font-size-control").value;
  document.querySelector("#text").style.fontSize = `${size}px`;
  //   document.querySelector("#text").style.color = "red";
  //   console.log(size);
});

const renderBTN = document.querySelector("[data-action='render']");
const destroyBTN = document.querySelector("[data-action='destroy']");
const amount = document.querySelector("#controls input").value;
// console.log(amount);
const createBoxes = (amount) => {};
