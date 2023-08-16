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
  let numsTemp = readline().replace(/\r/g, "");

  let nums = numsTemp.split(" ");
  let totalSum = nums.reduce((sum, item) => {
    sum = sum + parseInt(item);
    return sum;
  }, 0);
  let sortedArray = nums.sort(function (a, b) {
    return a - b;
  });
  let i = parseInt(n) - 1;
  let currentSum = 0;
  let count = 0;
  while (i >= 0) {
    count++;
    currentSum = parseInt(currentSum) + parseInt(sortedArray[i]);
    if (parseInt(totalSum / 2) < currentSum) {
      console.log(count);
      return;
    }
    i--;
  }
}
