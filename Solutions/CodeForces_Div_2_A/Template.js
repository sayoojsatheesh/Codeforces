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
  let stones = readline().replace(/\n/g, "");
  let instructions = readline().replace(/\n/g, "");
  let stonePointer = 0;
  let instructionsPointer = 0;
  while (instructionsPointer < instructions.length) {
    if (instructions[instructionsPointer] == stones[stonePointer]) {
      stonePointer++;
    }
    instructionsPointer++;
  }
  console.log(stonePointer + 1);
}
