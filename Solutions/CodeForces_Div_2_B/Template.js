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
  let stringArray = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => x);
  let numberArray = [...stringArray];
  let copy = [...stringArray];
  let sortedArray = numberArray.sort(function (a, b) {
    return a - b;
  });
  let pointer = numberArray.length - 1;
  let count = 0;
  while (pointer >= 0) {
    if (copy[0] >= copy[numberArray.length - 1]) {
      console.log(-1);
      return;
    }
    console.log(copy, numberArray[numberArray.length - 1]);
    copy.unshift(copy[numberArray.length - 1]);
    console.log("copy =", copy);
    copy.pop();
    console.log(copy);
    pointer--;
    count++;
    if (JSON.stringify(sortedArray) === JSON.stringify(copy)) {
      console.log(count);
      return;
    }
  }
  console.log(-1);
}
