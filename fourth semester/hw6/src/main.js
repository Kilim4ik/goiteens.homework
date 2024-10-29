"use strcict";
import { historyArray, pushToHistory } from "./history.js";
import { success } from "../node_modules/@pnotify/core/dist/PNotify.js";
import "@pnotify/core/dist/PNotify.css";

const form = document.querySelector("form");
const arrayOfInputs = document.querySelectorAll("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {};
  arrayOfInputs.forEach((elem) => {
    obj[elem.name] = elem.value;
  });
  pushToHistory(obj);

  arrayOfInputs.forEach((input) => (input.value = ""));
  success({
    title: "Success!",
    text: "Message was sended!",
  });
});
