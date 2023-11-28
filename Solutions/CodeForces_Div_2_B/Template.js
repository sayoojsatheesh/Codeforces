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
  let d = +readline().replace(/\r/g, "");
  let n = +readline().replace(/\r/g, "");
  let days = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let manualCount = 0;
  for (let i = 0; i < n - 1; i++) {
    manualCount += d - days[i];
  }
  console.log(manualCount);
}
