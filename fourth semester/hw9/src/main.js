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

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
const contactForm = document.querySelector("#new-contact-form");
const changeForm = document.querySelector("#change-contact-form");
const template = document.querySelector(".contacts-list");

const takeContactData = (inputs) => {
  const contactData = Array.from(inputs.children).map((elem) => elem.value);
  contactData.pop();
  if (contactData.some((elem) => elem == "" || elem == " ")) return;
  return contactData;
};
const arrayToObj = (callback) => {
  if (!callback) return;
  const contact = {
    name: callback[0],
    surname: callback[1],
    number: Number(callback[2]),
    email: callback[3],
  };
  return contact;
};
const clearForm = (arr) => {
  arr = arr.children;
  for (let i = 0; i < arr.length; i++) {
    arr[i].value = "";
  }
};
const chengeInputsForChenging = (arrInputs, contact) => {
  arrInputs[0].value = contact.name;
  arrInputs[1].value = contact.surname;
  arrInputs[2].value = contact.number;
  arrInputs[3].value = contact.email;
};

const updateJSON = () => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
};
const renderTable = () => {
  let code = ``;
  contacts
    .filter((elem) => elem)
    .forEach((elem) => {
      code += `
      <li>
      <ul class="contact">
        <li class="contact__elem">${elem.name}</li>
        <li class="contact__elem">${elem.surname}</li>
        <li class="contact__elem">${elem.number}</li>
        <li class="contact__elem">${elem.email}</li>
        <li class="contact__elem">
          <button class="contact__delete-button" 
          data-contact-name="${elem.name}" 
          data-contact-surname="${elem.surname}">
          за кораблем
          </button>
        </li>
        <li class="contact__elem">
          <button class="contact__change-button" 
          data-contact-name="${elem.name}" 
          data-contact-surname="${elem.surname}">
          заміна
          </button>
        </li>
      </ul>
    </li>`;
    });
  template.innerHTML = code;
};
renderTable();

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  contacts.push(arrayToObj(takeContactData(contactForm)));
  updateJSON();
  clearForm(contactForm);
  renderTable();
});
template.addEventListener("click", (e) => {
  if (e.target.classList == "contact__delete-button") {
    const name = e.target.dataset.contactName;
    const surname = e.target.dataset.contactSurname;
    contacts = contacts.filter((elem) => {
      if (elem != null) {
        return elem.name !== name && elem.surname !== surname;
      }
    });
    updateJSON();
    renderTable();
  }
  if (e.target.classList == "contact__change-button") {
    const name = e.target.dataset.contactName;
    const surname = e.target.dataset.contactSurname;
    const contact = contacts.find(
      (elem) => elem.name == name && elem.surname == surname
    );
    chengeInputsForChenging(changeForm.children, contact);
    changeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      contacts.splice(
        contacts.indexOf(contact),
        1,
        arrayToObj(takeContactData(changeForm))
      );
      clearForm(changeForm);
      updateJSON();
      renderTable();
    });
  }
});
