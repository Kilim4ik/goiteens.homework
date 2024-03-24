"use sctrict";

const numbers = [6, 65, 0];
numbers[1] = 10;
console.log(numbers);

const srtings = ["ksj", " skjd", "kdncksd"];
srtings.push("kdckd");
console.log(srtings);

//array from first task
let sum = 0;
for (i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log("sum", sum);

const numArray = [1, 2, 3, 4, 5];
for (let i of numArray) {
  alert(i);
}

const strArray = ["kekew", "ede", "wkhkwh", " je", " joehjow"];
for (let i of strArray) {
  if (i.length < 5) {
    continue;
  }
  console.log(i);
}

// task 6 and task 7
const arrayMaxNum = [
  2, 90, 45, 73, 2, 4, 8, 28, 19, 46, 28, 0, 83, 7, 3, 7, 2, 56, 36, 38, 15,
];
let maxNum = 0;
for (i = 0; i < arrayMaxNum.length; i++) {
  if (maxNum < arrayMaxNum[i]) {
    maxNum = arrayMaxNum[i];
  }
  if (arrayMaxNum[i] % 2 == 0 && arrayMaxNum[i] != 0) {
    alert("odd" + arrayMaxNum[i]);
  }
}
alert("max" + maxNum);
