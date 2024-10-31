"use strict";
const timer = document.querySelectorAll(".value");
let time = undefined;
const calcDate = () => {
  /*
   * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
   * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
   */
  let days = Math.floor(time / (1000 * 60 * 60 * 24)).toString();
  if (days.length === 1) days = "0" + days;

  /*
   * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
   * залишку% і ділимо його на кількість мілісекунд в одній годині
   * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
   */
  let hours = Math.floor(
    (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  ).toString();
  if (hours.length === 1) hours = "0" + hours;

  /*
   * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
   * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
   */
  let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString();
  if (mins.length === 1) mins = "0" + mins;

  /*
   * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
   * миллисекунд в одной секунде (1000)
   */
  let secs = Math.floor((time % (1000 * 60)) / 1000).toString();
  if (secs.length === 1) secs = "0" + secs;
  return { days, hours, mins, secs };
};
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.currentTime = new Date();
    this.calc();
  }
  calc() {
    console.log(
      this.selector,
      this.targetDate.getTime(),
      this.currentTime.getTime()
    );
    time =
      this.targetDate.getTime() -
      this.currentTime.getTime() +
      new Date().getTimezoneOffset() * 60 * 1000;
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2025"),
});
console.log(calcDate());

const ffd = document.querySelector("#f-f-d");
const fbd = document.querySelector("#f-b-d");
const sfd = document.querySelector("#s-f-d");
const sbd = document.querySelector("#s-b-d");
const lcd = document.querySelector("#l-c-d");
const rcd = document.querySelector("#r-c-d");

const ffh = document.querySelector("#f-f-h");
const fbh = document.querySelector("#f-b-h");
const sfh = document.querySelector("#s-f-h");
const sbh = document.querySelector("#s-b-h");
const lch = document.querySelector("#l-c-h");
const rch = document.querySelector("#r-c-h");

const ffm = document.querySelector("#f-f-m");
const fbm = document.querySelector("#f-b-m");
const sfm = document.querySelector("#s-f-m");
const sbm = document.querySelector("#s-b-m");
const lcm = document.querySelector("#l-c-m");
const rcm = document.querySelector("#r-c-m");

const ffs = document.querySelector("#f-f-s");
const fbs = document.querySelector("#f-b-s");
const sfs = document.querySelector("#s-f-s");
const sbs = document.querySelector("#s-b-s");
const lcs = document.querySelector("#l-c-s");
const rcs = document.querySelector("#r-c-s");

setInterval(() => {
  let { days, hours, mins, secs } = calcDate();
  let previousDay =
    (Number(days) + 1).toString().length < 2
      ? "0" + (Number(days) + 1)
      : (Number(days) + 1).toString();
  let previousHour =
    (Number(hours) + 1).toString().length < 2
      ? "0" + (Number(hours) + 1)
      : (Number(hours) + 1).toString();
  let previousMin =
    (Number(mins) + 1).toString().length < 2
      ? "0" + (Number(mins) + 1)
      : (Number(mins) + 1).toString();
  let previousSec =
    (Number(secs) + 1).toString().length < 2
      ? "0" + (Number(secs) + 1)
      : (Number(secs) + 1).toString();
  console.log("sec", secs, previousSec);
  console.log("min", mins, previousMin);

  ffd.innerHTML = days[0];
  fbd.innerHTML = days[0] !== "0" ? days[0] - 1 : 0;
  sfd.innerHTML = days[1];
  sbd.innerHTML = days[1] !== "0" ? days[1] - 1 : 9;

  ffh.innerHTML = hours[0];
  fbh.innerHTML = hours[0] !== "0" ? hours[0] - 1 : 2;
  sfh.innerHTML = hours[1];
  sbh.innerHTML = hours[1] !== "0" ? hours[1] - 1 : 4;

  ffm.innerHTML = mins[0];
  fbm.innerHTML = mins[0] !== "0" ? mins[0] - 1 : 5;
  sfm.innerHTML = mins[1];
  sbm.innerHTML = mins[1] !== "0" ? mins[1] - 1 : 9;

  ffs.innerHTML = secs[0];
  fbs.innerHTML = secs[0] !== "0" ? secs[0] - 1 : 5;
  sfs.innerHTML = secs[1];
  sbs.innerHTML = secs[1] !== "0" ? secs[1] - 1 : 9;

  const style = document.createElement("style");
  style.innerHTML = `
  
  .flip-clock-d .digit-left::before {
    content: '${days[0]}';
  }
  .flip-clock-d .digit-left::after {
    content: '${days[0] != 0 ? days[1] - 1 : 9}';

  }
  .flip-clock-d .digit-right::before {
    content: '${days[1]}';
  }
  .flip-clock-d .digit-right::after {
    content: '${days[1] != 0 ? days[1] - 1 : 9}';
  }

  .flip-clock-h .digit-left::before {
    content: '${hours[0]}';
  }
  .flip-clock-h .digit-left::after {
    content: '${hours[0] != 0 ? hours[1] - 1 : 9}';

  }
  .flip-clock-h .digit-right::before {
    content: '${hours[1]}';
  }
  .flip-clock-h .digit-right::after {
    content: '${hours[1] != 0 ? hours[1] - 1 : 9}';
  }

  .flip-clock-m .digit-left::before {
    content: '${mins[0]}';
  }
  .flip-clock-m .digit-left::after {
    content: '${mins[0] != 0 ? mins[1] - 1 : 9}

  }
  .flip-clock-m .digit-right::before {
    content: '${mins[1]}';
  }
  .flip-clock-m .digit-right::after {
    content: '${mins[1] != 0 ? mins[1] - 1 : 9}';
  }

  .flip-clock-s .digit-left::before {
    content: '${secs[0]}';
  }
  .flip-clock-s .digit-left::after {
    content: '${secs[0] != 0 ? secs[0] - 1 : 5}';

  }
  .flip-clock-s .digit-right::before {
    content: '${secs[1]}';
  }
  .flip-clock-s .digit-right::after {
    content: '${secs[1] != 0 ? secs[1] - 1 : 9}';
  }
`;

  if (previousSec[1] !== secs[1]) {
    rcs.classList.remove("flipped");

    setTimeout(() => {
      rcs.classList.add("flipped");
    }, 100);
  }
  if (secs[1] == 0) {
    lcs.classList.remove("flipped");

    setTimeout(() => {
      lcs.classList.add("flipped");
    }, 100);
  }
  if (secs == "00") {
    rcm.classList.remove("flipped");

    setTimeout(() => {
      rcm.classList.add("flipped");
    }, 100);
    if (mins[1] == "0") {
      lcm.classList.remove("flipped");

      setTimeout(() => {
        lcm.classList.add("flipped");
      }, 100);
    }
  }
  if (mins == "00") {
    rch.classList.remove("flipped");

    setTimeout(() => {
      rch.classList.add("flipped");
    }, 100);
    if (hours[1] == "0") {
      lch.classList.remove("flipped");

      setTimeout(() => {
        lch.classList.add("flipped");
      }, 100);
    }
  }
  if (hours == "00") {
    rcd.classList.remove("flipped");

    setTimeout(() => {
      rcd.classList.add("flipped");
    }, 100);
    if (days[1] == "0") {
      lcd.classList.remove("flipped");

      setTimeout(() => {
        lcd.classList.add("flipped");
      }, 100);
    }
  }

  document.head.appendChild(style);
  time -= 1000;
}, 1000);
// setInterval(() => {
//   let { days, hours, mins, secs } = calcDate();

//   console.log("mins", mins, previousMin);
//   console.log("secs", secs, previousSec);

//   //!
//   if (previousSec[1] !== 0) {
//     sfs.innerHTML = secs[1];
//     sbs.innerHTML = secs[1] != 0 ? secs[1] - 1 : 9;
//     const style = document.createElement("style");
//     style.innerHTML = `

//   .flip-clock-s .digit-right::before {
//     content: '${secs[1]}';

//   }
//   .flip-clock-s .digit-right::after {
//     content: '${secs[1] != 0 ? secs[1] - 1 : 9}';
//   }
// `;
//     document.head.appendChild(style);

//     rcs.classList.remove("flipped");

//     setTimeout(() => {
//       rcs.classList.add("flipped");
//     }, 100);
//   }
//   if (secs[1] === "0") {
//     ffs.innerHTML = secs[0];
//     fbs.innerHTML = secs[0] != 0 ? secs[0] - 1 : 5;
//     const style = document.createElement("style");
//     style.innerHTML = `

//       .flip-clock-s .digit-left::before {
//         content: '${secs[0]}';

//       }
//       .flip-clock-s .digit-left::after {
//         content: '${secs[0] != 0 ? secs[0] - 1 : 5}';
//       }
//     `;
//     document.head.appendChild(style);

//     lcs.classList.remove("flipped");

//     setTimeout(() => {
//       lcs.classList.add("flipped");
//     }, 100);
//   }
//   previousSec = secs;
//   if (secs === "00") {
//     sfm.innerHTML = mins[1];
//     sbm.innerHTML = mins[1] != 0 ? mins[1] - 1 : 9;
//     const style = document.createElement("style");
//     style.innerHTML = `

//       .flip-clock-m .digit-right::before {
//         content: '${mins[1]}';

//       }
//       .flip-clock-m .digit-right::after {
//         content: '${mins[1] != 0 ? mins[1] - 1 : 9}';
//       }
//     `;
//     document.head.appendChild(style);

//     rcm.classList.remove("flipped");

//     setTimeout(() => {
//       rcm.classList.add("flipped");
//     }, 100);

//     if (mins[1] === "0") {
//       console.log("00000");
//       ffm.innerHTML = mins[0];
//       fbm.innerHTML = mins[0] != 0 ? mins[0] - 1 : 5;
//       const style = document.createElement("style");
//       style.innerHTML = `

//       .flip-clock-m .digit-left::before {
//         content: '${mins[0]}';

//       }
//       .flip-clock-m .digit-left::after {
//         content: '${mins[0] != 0 ? mins[0] - 1 : 5}';
//       }
//     `;
//       document.head.appendChild(style);

//       lcm.classList.remove("flipped");

//       setTimeout(() => {
//         lcm.classList.add("flipped");
//       }, 100);
//     }
//     previousMin = mins;
//   }

//!
//   if (previousMin[1] !== 0) {
//     sfs.innerHTML = mins[1];
//     sbs.innerHTML = mins[1] != 0 ? mins[1] - 1 : 9;
//     const style = document.createElement("style");
//     style.innerHTML = `

//   .flip-clock-s .digit-right::before {
//     content: '${mins[1]}';

//   }
//   .flip-clock-s .digit-right::after {
//     content: '${mins[1] != 0 ? mins[1] - 1 : 9}';
//   }
// `;
//     document.head.appendChild(style);

//     rcs.classList.remove("flipped");

//     setTimeout(() => {
//       rcs.classList.add("flipped");
//     }, 100);
//   }
//   if (mins[1] === "0") {
//     console.log("00000");
//     ffs.innerHTML = mins[0];
//     fbs.innerHTML = mins[0] != 0 ? mins[0] - 1 : 5;
//     const style = document.createElement("style");
//     style.innerHTML = `

//   .flip-clock-s .digit-left::before {
//     content: '${mins[0]}';

//   }
//   .flip-clock-s .digit-left::after {
//     content: '${mins[0] != 0 ? mins[0] - 1 : 5}';
//   }
// `;
//     document.head.appendChild(style);

//     lcs.classList.remove("flipped");

//     setTimeout(() => {
//       lcs.classList.add("flipped");
//     }, 100);
//   }
//   previousMin = mins;
//   if (previousSec[1] !== 0) {
//     sfs.innerHTML = secs[1];
//     sbs.innerHTML = secs[1] != 0 ? secs[1] - 1 : 9;
//     const style = document.createElement("style");
//     style.innerHTML = `

//   .flip-clock-s .digit-right::before {
//     content: '${secs[1]}';

//   }
//   .flip-clock-s .digit-right::after {
//     content: '${secs[1] != 0 ? secs[1] - 1 : 9}';
//   }
// `;
//     document.head.appendChild(style);

//     rcs.classList.remove("flipped");

//     setTimeout(() => {
//       rcs.classList.add("flipped");
//     }, 100);
//   }
//   if (secs[1] === "0") {
//     console.log("00000");
//     ffs.innerHTML = secs[0];
//     fbs.innerHTML = secs[0] != 0 ? secs[0] - 1 : 5;
//     const style = document.createElement("style");
//     style.innerHTML = `

//   .flip-clock-s .digit-left::before {
//     content: '${secs[0]}';

//   }
//   .flip-clock-s .digit-left::after {
//     content: '${secs[0] != 0 ? secs[0] - 1 : 5}';
//   }
// `;
//     document.head.appendChild(style);

//     lcs.classList.remove("flipped");

//     setTimeout(() => {
//       lcs.classList.add("flipped");
//     }, 100);
//   }
//   previousSec = secs;
//   if (previousSec[1] !== 0) {
//     sfs.innerHTML = secs[1];
//     sbs.innerHTML = secs[1] != 0 ? secs[1] - 1 : 9;
//     const style = document.createElement("style");
//     style.innerHTML = `

//   .flip-clock-s .digit-right::before {
//     content: '${secs[1]}';

//   }
//   .flip-clock-s .digit-right::after {
//     content: '${secs[1] != 0 ? secs[1] - 1 : 9}';
//   }
// `;
//     document.head.appendChild(style);

//     rcs.classList.remove("flipped");

//     setTimeout(() => {
//       rcs.classList.add("flipped");
//     }, 100);
//   }
//   if (secs[1] === "0") {
//     console.log("00000");
//     ffs.innerHTML = secs[0];
//     fbs.innerHTML = secs[0] != 0 ? secs[0] - 1 : 5;
//     const style = document.createElement("style");
//     style.innerHTML = `

//   .flip-clock-s .digit-left::before {
//     content: '${secs[0]}';

//   }
//   .flip-clock-s .digit-left::after {
//     content: '${secs[0] != 0 ? secs[0] - 1 : 5}';
//   }
// `;
//     document.head.appendChild(style);

//     lcs.classList.remove("flipped");

//     setTimeout(() => {
//       lcs.classList.add("flipped");
//     }, 100);
//   }
//   previousSec = secs;

//   time -= 1000;
// }, 1000);
