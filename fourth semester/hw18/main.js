// Створити HTML-сторінку з необхідними елементами, такими як кнопки, текстові поля та таблицю для відображення студентів.
// Написати JavaScript-код для обробки подій користувача.
// Додати обробники подій для кнопок, щоб вони виконували відповідні HTTP-запити.
// При натисканні на кнопку "Отримати студентів" (GET), виконати HTTP-запит GET /movies і відобразити отримані дані в таблиці.
// Реалізувати форму для додавання новий фільм. При натисканні на кнопку "Додати фільм" (POST), зібрати дані з полів вводу, сформувати об'єкт з даними фільму і виконати HTTP-запит POST /movies, щоб додати нового фільм до бази даних.
// Реалізувати можливість оновлення інформації про фільм. Для кожного фільму в таблиці додати кнопку "Оновити". При натисканні на цю кнопку, виконати HTTP-запит PUT /movies/:id, де :id — ідентифікатор фільму, і відправити оновлені дані про фільм на сервер.
// Додати можливість часткового оновлення інформації про фільм. Для кожного фільму в таблиці додати кнопку "Редагувати". При натисканні на цю кнопку, відкрити модальне вікно з формою, в якій можна змінити окремі поля фільму. При натисканні на кнопку "Зберегти" (PATCH), виконати HTTP-запит PATCH /movies/:id.
// Додати можливість видалення фільму. Для кожного фільму в таблиці додати кнопку "Видалити". При натисканні на цю кнопку, виконати HTTP-запит DELETE /movies/:id.

"use strict";
const baseURL = "http://localhost:4000";
const getMovies = () => fetch(`${baseURL}/movies`);
const postMovie = (movie) =>
  fetch(`${baseURL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
const putMovie = (id, movie) =>
  fetch(`${baseURL}/movies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
const patchMovie = (id, movie) =>
  fetch(`${baseURL}/movies/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
const deleteMovie = (id) =>
  fetch(`${baseURL}/movies/${id}`, { method: "DELETE" });

const renderMovies = async () => {
  let arr = await getMovies()
    .then((res) => res.json())
    .then((data) => data);
  console.log(arr);
  let str = ``;
  arr.forEach(
    (elem) =>
      (str += `      
      <li>
    <h2>${elem.title}</h2>
        <p>${elem.director}</p>
        <p>${elem.genre}</p>
        <span>${elem.year}</span>
        <button id="${elem.id}" data-action='change'>change</button>
        <button id="${elem.id}" data-action='delete'>delete</button>
</li>`)
  );
  document.querySelector(".content-container").innerHTML = str;
};
renderMovies();
const eventPost = () => {
  document.querySelector(".form-button").addEventListener("click", (e) => {
    e.preventDefault();
    const formData = {};
    document.querySelectorAll(".movie-form input").forEach((input) => {
      formData[input.name] = input.value;
    });

    postMovie(formData);
    renderMovies();
  });
};

document
  .querySelector(".button-container")
  .addEventListener("click", async (e) => {
    if (e.target.textContent === "Get") renderMovies();
    if (e.target.textContent === "Post") {
      document.querySelector(".movie-form").classList.remove("is-hidden");
      eventPost();
    }
    if (e.target.textContent === "Put") renderMovies();
    if (e.target.textContent === "Patch") renderMovies();
    if (e.target.textContent === "Delete") renderMovies();
  });

document
  .querySelector(".content-container")
  .addEventListener("click", async (e) => {
    if (e.target.dataset.action === "change") {
      const res = await fetch(`${baseURL}/movies/${e.target.id}`);
      const movie = await res.json();
      console.log(movie);
      document.querySelector(".movie-form").classList.remove("is-hidden");
      const inputs = document
        .querySelector(".movie-form")
        .querySelectorAll("input");
      inputs[0].value = movie.title;
      inputs[1].value = movie.genre;
      inputs[2].value = movie.director;
      inputs[3].value = movie.year;
      document.querySelector(".form-button").addEventListener("click", (e) => {
        e.preventDefault();
        const formData = {};
        document.querySelectorAll(".movie-form input").forEach((input) => {
          formData[input.name] = input.value;
        });

        putMovie(movie.id, formData);
        renderMovies();
        document.querySelector(".movie-form").classList.add("is-hidden");
      });
    }
    if (e.target.dataset.action === "delete") {
      deleteMovie(e.target.id);
      renderMovies();
    }
  });
