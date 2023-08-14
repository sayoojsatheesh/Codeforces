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
  let sum = readline().replace(/\r/g, "");
  let array = sum.split("+");
  let maxValue = Math.max(...array);
  let frequencyCounter = new Array(maxValue + 1).fill(0);
  array.map((item) => {
    frequencyCounter[item]++;
  });
  const sortedArray = [];
  for (let i = 0; i < frequencyCounter.length; i++) {
    while (frequencyCounter[i] > 0) {
      sortedArray.push(i);
      frequencyCounter[i]--;
    }
  }

  console.log(sortedArray.join("+"));
}
