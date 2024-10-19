"use strict";
const timer = document.querySelectorAll(".value");
let time = undefined;
const calcDate = () => {
  /*
   * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
   * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
   */
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  /*
   * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
   * залишку% і ділимо його на кількість мілісекунд в одній годині
   * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
   */
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  /*
   * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
   * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
   */
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  /*
   * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
   * миллисекунд в одной секунде (1000)
   */
  const secs = Math.floor((time % (1000 * 60)) / 1000);
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
console.log(time);

setInterval(() => {
  const displayedTime = calcDate();
  const { days, hours, mins, secs } = displayedTime;
  timer[0].innerHTML = days;
  timer[1].innerHTML = hours;
  timer[2].innerHTML = mins;
  timer[3].innerHTML = secs;
  time -= 1000;
}, 1000);
