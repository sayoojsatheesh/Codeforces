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
  let temp = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let a = temp[0];
  let b = temp[1];
  let c = temp[2];
  let d = temp[3];
  let p = a / b;
  let q = c / d;
  let probability = p / (1 - (1 - p) * (1 - q));
  console.log(probability);
}
