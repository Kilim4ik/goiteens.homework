"use strict";
let tasks = [
  {
    id: 0,

    str: "str1",
    isReady: false,
    isDeleted: false,
  },
  {
    id: 1,

    str: "str2",
    isReady: false,
    isDeleted: false,
  },
  {
    id: 2,

    str: "str3",
    isReady: true,
    isDeleted: false,
  },
];
tasks = JSON.parse(localStorage.getItem("tasks"));
tasks = tasks ? tasks : [];
let id = tasks ? tasks.length : 0;
const input = document.querySelector("#new-task");
const btn = document.querySelector("#add-task");
const list = document.querySelector(".todo-list");
const render = () => {
  let code = ``;

  tasks
    .filter((elem) => !elem.isDeleted)
    .forEach((elem) => {
      code += `
    <li class="todo-list__item" >
    <button id="${elem.id}" data-action="delete" class="todo-list__button">
      видалити
    </button>
    <button  data-action="${
      elem.isReady ? "ready" : "notReady"
    }" class="todo-list__button">
    ${elem.isReady ? "повернути" : "готово"}
 
    </button>
    <p class="todo-list__content">${elem.str}</p>
  </li>
    `;
    });
  list.innerHTML = code;
  console.log(id);
};
render();
btn.addEventListener("click", () => {
  tasks.push({
    id,
    str: input.value,
    isReady: false,
    isDeleted: false,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render();
  id++;

  console.log(tasks);
});
list.addEventListener("click", (e) => {
  if (e.target.dataset.action == "ready") {
    e.target.dataset.action = "notReady";
    e.target.textContent = "готово";
  } else if (e.target.dataset.action == "notReady") {
    e.target.dataset.action = "ready";
    e.target.textContent = "повернути";
  }
  if (e.target.dataset.action == "delete") {
    tasks[Number(e.target.id)].isDeleted = true;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    render();
  }
});
let users = JSON.parse(localStorage.getItem("users")) || [];
let thisUser = JSON.parse(localStorage.getItem("thisUser")) || undefined;
const section = document.querySelector(".form-section");

document.querySelector(
  "#user-name"
).textContent = `Вітання , ${thisUser.login}`;
section.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.target.id == "reg-form") {
    users.push({
      login: e.target.children[0].value,
      password: e.target.children[1].value,
    });
    localStorage.setItem("users", JSON.stringify(users));
  }
  if (e.target.id == "login-form") {
    const login = e.target.children[0].value;
    const password = e.target.children[1].value;
    const user = users.find(
      (elem) => elem.login == login && elem.password == password
    );
    thisUser = user;
    localStorage.setItem("thisUser", JSON.stringify(user));
  }
});

let history = JSON.parse(localStorage.getItem("history")) || [];
let historyID = history.length;
const inputTXT = document.querySelector("#new-link-txt");
const inputURL = document.querySelector("#new-link-url");
const btnLink = document.querySelector("#add-link");
const historySection = document.querySelector(".history-section");
const renderHistory = () => {
  let code = ``;
  history.forEach((elem) => {
    code += `
    <li class="history__item" >
    <button id="${elem.id}" data-action="delete" class="history__button">X</button>
    <button id="${elem.id}" data-action="edit" class="history__button">E</button>
    <a class="history__content" href="${elem.url}">${elem.name}</a>
  </li>
    `;
  });
  historySection.innerHTML = code;
};
renderHistory();
btnLink.addEventListener("click", () => {
  const arr = historySection.children;

  history.push({
    id: historyID,
    name: inputTXT.value,
    url: inputURL.value,
  });
  historyID++;
  renderHistory();
  localStorage.setItem("history", JSON.stringify(history));
});
historySection.addEventListener("click", (e) => {
  if (e.target.dataset.action == "delete") {
    history.forEach((elem) => console.log(elem));
    history = history.filter((elem) => elem.id !== Number(e.target.id));
    renderHistory();
    localStorage.setItem("history", JSON.stringify(history));
  }
  if (e.target.dataset.action == "edit") {
    const item = history.find((elem) => elem.id == Number(e.target.id));
    item.name = inputTXT.value;
    item.url = inputURL.value;
    renderHistory();
  }
});
