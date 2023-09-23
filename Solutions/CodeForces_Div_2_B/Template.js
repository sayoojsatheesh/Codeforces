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
  let maxCount = n - (m - 1);
  let maxFriends = (maxCount * maxCount - maxCount) / 2;
  let minCount = n / m;
  let minValue = (minCount*minCount-minCount)/2;
  minValue = m == 1 ? maxFriends : minValue*m;
  let print = Math.round(minValue) + " " + maxFriends;
  console.log(print);
}
