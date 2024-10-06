"use strict";

let tasks = [
  {
    str: "str1",
    isReady: false,
  },
  {
    str: "str2",
    isReady: false,
  },
  {
    str: "str3",
    isReady: true,
  },
];
const list = document.querySelector(".todo-list");
tasks.forEach((elem) => {
  let code = ``;
  code += `
    <li class="todo-list__item">
    <button data-action="delete" class="todo-list__button">
      видалити
    </button>
    <button data-action="${
      (elem.isReady ?? "ready", "notReady")
    }" class="todo-list__button">
    ${(elem.isReady ?? "повернути", "готово")}
 
    </button>
    <p class="todo-list__content">${elem.str}</p>
  </li>
    `;
  list.innerHTML = code;
});
// tasks = JSON.parse(localStorage.getItem("tasks"));
