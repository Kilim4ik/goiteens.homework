"use strict";
import { error, info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";
import Chart from "chart.js/auto";
const keyDawnMess = document.querySelector(".key-game__text");
const keyDawnButton = document.querySelector(".key-game__button");
const reloadButton = document.querySelector("button");
let currentKeyIndex = 0;
const keys = ["F", "Q", "W", "E", "R", "T", "Y", "1", "2", "3"];
document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (
    e.code == `Key${keys[currentKeyIndex]}` ||
    e.code == `Digit${keys[currentKeyIndex]}`
  ) {
    currentKeyIndex++;
    keyDawnButton.innerHTML = keys[currentKeyIndex];
  } else {
    error({
      title: "title",
      text: "error",
    });
  }
});
reloadButton.addEventListener("click", () => {
  currentKeyIndex = 0;
  keyDawnButton.innerHTML = keys[currentKeyIndex];

  info({
    title: "game was reloaded",
    text: "game was reloaded",
  });
});
keyDawnButton.innerHTML = keys[currentKeyIndex];

const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const salesChart = new Chart(document.querySelector("#sales-chart"), {
  type: "line",
  data: chartData,
});
