"use srtict";

// const fstDrink = "кава";
// const sndDrink = "чай";
// const thrdDrink = "сік";
// const userDrink = Number(
//   prompt(`Що будете пити ? ${fstDrink} - 1 ${sndDrink} - 2 ${thrdDrink} - 3 `)
// );
// switch (userDrink) {
//   case 1:
//     alert(` Ви обрали ${fstDrink}`);
//     break;
//   case 2:
//     alert(`Ви обрали ${sndDrink}`);
//     break;
//   case 3:
//     alert(`Ви обрали ${thrdDrink}`);
//     break;
//   default:
//     alert('Ви не обрали замовлення');
// }

// const today = prompt("Сьогодні ...").trim().toLocaleLowerCase();
// console.log(today);
// switch (today) {
//   case "понеділок":
//   case "вівторок":
//   case "середа":
//   case "четвер":
//   case "п'ятниця":
//     alert("Іди на роботу!");
//     break;

//   case "субота":
//   case "неділя":
//     alert("Іди уроки вчи! В поекділок в школу!");
//     break;

//   default:
//     alert("Сьогодні не день тижня");
// }

// const userMonth = Number(prompt("Номер місяця  ... "));
// switch (userMonth) {
//   case 1:
//     alert("січень (зима) 30");
//     break;
//   case 2:
//     alert("лютий (зима) 31");
//     break;

//   case 3:
//     alert("березень (весна) 30");
//     break;

//   case 4:
//     alert("квітень (весна) 30");
//     break;

//   case 5:
//     alert("травень (весна) 30");
//     break;

//   case 6:
//     alert("червень (літо) 30");
//     break;

//   case 7:
//     alert("июль (літо) 30");
//     break;

//   case 8:
//     alert("август (літо) 30");
//     break;

//   case 9:
//     alert("вересень (осінь) 30");
//     break;

//   case 10:
//     alert("жовтень (осінь) 30");
//     break;

//   case 11:
//     alert("листопад (осінь) 30");
//     break;

//   case 12:
//     alert("грудень (зима) 30");
//     break;
//   default:
//     alert("БомБом? Це не номер місяця");
// }

// const userColor = prompt().trim().toLocaleLowerCase();

// switch (userColor) {
//   case "червоний":
//     alert("стій");
//     break;
//   case "жовтий":
//     alert("чекати");
//     break;
//   case "зелений":
//     alert("іди");
//     break;
//   default:
//     alert("не той колір !");
// }


const userFstNum = Number(prompt());
const userMark = prompt();
const userSndNum = Number(prompt());

let result;
var outputFstNum, outputSndNum;

switch (true) {
  case !isNaN(userFstNum):
    outputFstNum = userFstNum;
    break;
  default:
    alert("помилка");
}

switch (true) {
  case !isNaN(userSndNum):
    outputSndNum = userSndNum;
    break;
  default:
    alert("помилка");
}

switch (userMark) {
  case "+":
    result = outputFstNum + outputSndNum;
    break;
  case "-":
    result = outputFstNum - outputSndNum;

    break;
  case "*":
    result = outputFstNum * outputSndNum;

    break;
  case "/":
    result = outputFstNum / outputSndNum;

    break;
  default:
    alert("помилка");
}

alert(result);
