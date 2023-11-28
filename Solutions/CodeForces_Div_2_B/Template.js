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
  let n = temp[0];
  let k = temp[1];
  let lightVarsion = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let printArray = [];
  let min;
  for (let i = 0; i < k; i++) {
    let maxValue = Math.max(...lightVarsion);
    let index = lightVarsion.findIndex((item) => item == maxValue);
    if (i !== k - 1) {
      printArray.push(index + 1);
      lightVarsion[index] = 0;
    } else {
      printArray.push(index + 1);
      min = lightVarsion[index];
    }
  }

  console.log(min);
  console.log(printArray.join(" "));
}
