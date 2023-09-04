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
  let m = temp[1];
  let pass = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let fail = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let sortedPass = pass.sort(function (a, b) {
    return a - b;
  });
  let highest = sortedPass[sortedPass.length - 1];
  if (!(2 * sortedPass[0] <= highest)) {
    console.log(-1);
    return;
  }

  let failedSorted = fail.sort(function (a, b) {
    return a - b;
  });
  if (failedSorted[0] < highest) {
    console.log(-1);
    return;
  }
  console.log(highest);
}
