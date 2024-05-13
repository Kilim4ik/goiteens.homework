"use strict";

const dadOldestIn2Times = (dadAge, sonAge) => {
  for (let i = 0; i < 110; i++) {
    if ((dadAge - sonAge + i) / 2 == i) {
      console.log(i - sonAge);
      return "";
    }
  }
};
dadOldestIn2Times(26, 13);
