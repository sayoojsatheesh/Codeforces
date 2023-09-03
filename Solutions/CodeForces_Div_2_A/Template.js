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
  let k = temp[1];
  let numbers = [];
  for (let i = 0; i < n; i++) {
    let x = readline()
      .replace(/\r/g, "")
      .split(" ")
      .map((x) => parseInt(x));
    numbers.push(x);
  }
  let pointer = 0;
  let printCount = 0;
  while (pointer < n) {
    let count = 0;
    for (let i = 0; i < numbers[pointer].toString().length; i++) {
      if (
        numbers[pointer].toString()[i] == 4 ||
        numbers[pointer].toString()[i] == 7
      ) {
        count++;
      }
    }

    if (count <= k) {
      printCount++;
    }
    pointer++;
  }
  console.log(printCount);
}
