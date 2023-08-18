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
  let n = readline().replace(/\n/g, "");
  let m = readline().replace(/\n/g, "");
  let puzzle = readline()
    .replace(/\n/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  array.push(x);
  let largest = Math.max(...puzzle);
  let frequencyCounter = new Array(largest + 1).fill(0);
  let sortedArray = [];
  for (let i = 0; i < m; i++) {
    frequencyCounter[puzzle[i]]++;
  }
  for (let i = 0; i < frequencyCounter.length; i++) {
    while (frequencyCounter[i] > 0) {
      frequencyCounter[i]--;
      sortedArray.push(i);
    }
  }
  let minimumValue = sortedArray[n - 1] - sortedArray[0];
  console.log(minimumValue);
}
