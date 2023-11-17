"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.trim().split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}

// ********** Code Start **********

function main() {
  let string = readline().replace(/\r/g, "");
  let totalPoints = 0;
  let deepCopy = cards.map((arr) => arr);
  let higestChance = sortByChance(deepCopy);
  console.log("higestChance =", higestChance);
  let counter = 1;
  let chancePointer = 0;
  while (counter > 0) {
    counter--;
    if (higestChance[chancePointer][1] == 0) {
      let tempHigestPoints = 0;
      for (let i = 1; i < higestChance.length; i++) {
        if (higestChance[tempHigestPoints][0] < higestChance[i][0]) {
          tempHigestPoints = i;
        }
      }
      totalPoints = totalPoints + higestChance[tempHigestPoints][0];
      higestChance[tempHigestPoints][0] = 0;
      higestChance[tempHigestPoints][0] = 0;
    } else {
      counter = counter + higestChance[chancePointer][1];
      totalPoints = totalPoints + higestChance[chancePointer][0];
      higestChance[chancePointer][0] = 0;
      higestChance[chancePointer][1] = 0;
    }
    chancePointer++;
  }
  console.log(totalPoints);
  function sortByChance(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j][1] < arr[j + 1][1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
}
