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
  let k = temp[1];
  let all = [];
  for (let j = 0; j < n; j++) {
    let x = readline()
      .replace(/\n/g, "")
      .split("")
      .map((x) => parseInt(x));
    all.push(x);
  }
  let largest = 0;
  let happy = 0;
  for (let i = 0; i < n; i++) {
    if (all[i][1] > k) {
      happy = all[i][0] - (all[i][1] - k);
    } else {
      happy = all[i][0];
    }
    if (i == 0) {
      largest = happy;
    }
    if (happy > largest) {
      largest = happy;
    }
  }
  console.log(largest);
}
