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
    .replace(/\n/g, "")
    .split("")
    .map((x) => parseInt(x));
  let n = temp[0];
  let b = temp[1];
  let days = readline()
    .replace(/\n/g, "")
    .split("")
    .map((x) => parseInt(x));
  let moneyEarned = 0;
  for (let i = 0; i < n; i++) {
    if (days[i] - days[i + 1] > moneyEarned) {
      moneyEarned = days[i] - days[i + 1];
    }
  }
  console.log(moneyEarned - b);
}
