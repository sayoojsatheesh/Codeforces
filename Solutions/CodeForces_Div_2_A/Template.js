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
  let temp = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let n = temp[0];
  let a = temp[1];
  let b = temp[2];
  let c = temp[3];
  let max = 0;
  for (let i = 0; i < a / 2; i++) {
    for (let j = 0; j < b / 2; j++) {
      for (let k = 0; k < c / 2; k++) {
        let val = n - a * i + b * j + c * k;
        if (val == 0) {
          max = Math.max(max, i + j + k);
        }
      }
    }
  }
  console.log(max);
}
