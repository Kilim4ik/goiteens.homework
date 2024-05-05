"use strict";


let fromOneToTen = 1;
while (fromOneToTen < 10) {
  alert(fromOneToTen);
  fromOneToTen++;
}


for (let odd = 2; odd < 20; odd++) {
  if (odd % 2 == 1) {
    continue;
  }
  alert(odd);
}


for (let num = 1; num < 11; num++) {
  alert(7 * num);
}


const userNum = Number(prompt("number"));
let outputNum = 1;

while (true) {
  alert(outputNum);
  outputNum++;
  if (outputNum >= userNum) {
    break;
  }
}


let num = 1;

while (num < 20) {
  if (num % 3 == 0) {
    num++;
    continue;
  }
  alert(num);
  num++;
}
