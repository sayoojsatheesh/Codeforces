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
  let n = +readline().replace(/\n/g, "");
  let arr = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  while (true) {
    arr.sort((a, b) => b - a);
    const largest = arr[0];
    const secondLargest = arr[1];

    if (secondLargest === 0) {
      break;
    }

    arr[0] -= secondLargest;
  }
  const minimalSum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(minimalSum);
}
