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
  let n = parseInt(readline().replace(/\n/g, "") - 1);
  let nums = readline()
    .replace(/\n/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  if (n <= 1) {
    if (nums[0] < nums[1]) {
      console.log(1);
    } else {
      console.log(0);
    }
  } else {
    let largeValue = nums[0];
    let smallValue = nums[n];
    let largeIndex = 0;
    let smallIndex = n;

    for (let i = 0; i <= n; i++) {
      if (nums[i] > largeValue) {
        largeValue = nums[i];
        largeIndex = i;
      }
      if (nums[i] <= smallValue) {
        smallValue = nums[i];
        smallIndex = i;
      }
    }

    if (largeIndex > smallIndex) {
      smallIndex = smallIndex + 1;
    }

    let totalTime = Math.abs(0 - largeIndex) + Math.abs(n - smallIndex);
    console.log(totalTime);
  }
}
