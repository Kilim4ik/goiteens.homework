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
const cd = document.querySelector("#f-c-d");
setInterval(() => {
  const displayedTime = calcDate();
  const { days, hours, mins, secs } = displayedTime;

  ffd.innerHTML = days[0];
  fbd.innerHTML = Number(days[0]) + 1;
  sfd.innerHTML = days[1];
  sbd.innerHTML = Number(days[1]) + 1;
  // timer[0].innerHTML = days;
  // timer[1].innerHTML = hours;
  // timer[2].innerHTML = mins;
  // timer[3].innerHTML = secs;
  time -= 1000;
  const style = document.createElement("style");
  style.innerHTML = `
  .flip-clock-d .digit-left::before {
    content: '${days[0]}';
  }
  .flip-clock-d .digit-left::after {
    content: '${Number(days[0]) + 1}';

  }
  .flip-clock-d .digit-right::before {
    content: '${days[1]}';
  }
  .flip-clock-d .digit-right::after {
    content: '${Number(days[1]) + 1}';

  }
`;
  document.head.appendChild(style);
}, 1000);

console.log(cd.before);
console.log(fd);

fd.innerHTML = calcDate().days[0];
