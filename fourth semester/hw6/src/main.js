"use strcict";
import { historyArray, pushToHistory } from "./history";
import { success } from "../node_modules/@pnotify/core/dist/PNotify.js";
import "@pnotify/core/dist/PNotify.css";

const form = document.querySelector("form");
const arrayOfInputs = document.querySelectorAll("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  pushToHistory({
    name: arrayOfInputs[0].value,
    email: arrayOfInputs[1].value,
    message: arrayOfInputs[2].value,
  });
  arrayOfInputs.forEach((input) => (input.value = ""));
  success({
    title: "Success!",
    text: "Message was sended!",
  });
});
