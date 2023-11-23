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
  let n = +readline().replace(/\r/g, "");
  let tempString = "abcd";
  let stringPointer = 0;
  let luckyString = "";
  for (let i = 0; i < n; i++) {
    luckyString = luckyString + tempString[stringPointer];
    if (stringPointer == 3) {
      stringPointer = 0;
      continue;
    }
    stringPointer++;
  }

  console.log(luckyString);
}
