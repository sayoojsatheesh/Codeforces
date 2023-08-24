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
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}

// ********** Code Start **********

function main() {
  // Number //
  // String //
  let temp;
  for (let i = 0; i < 2; i++) {
    temp = readline()
      .replace(/\n/g, "")
      .split(" ")
      .map((x) => parseInt(x));
  }
  let a = temp[0];
  let b = temp[1];
  let draw = 0;
  let aWins;
  let bWins;
  if ((a - b - 1) % 2 !== 0) {
    draw = 1;
  }
  let value1;
  let value2;
  if (a < b) {
    value1 = a;
    value2 = b;
  } else {
    value1 = b;
    value2 = a;
  }

  let left = Math.abs(0 - value1);
  let right = Math.abs(Math.floor((value2 - value1 - 1) / 2));
  aWins = left + right;
  bWins = 6 - aWins - draw;

  let probability =
    a < b
      ? Math.floor(aWins) + " " + draw + " " + Math.floor(bWins)
      : Math.floor(bWins) + " " + draw + " " + Math.floor(aWins);
  console.log(probability);
}
