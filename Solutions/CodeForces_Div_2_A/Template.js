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
  let printSet;
  if (n % 2 !== 0) {
    console.log(-1);
    return;
  } else {
    printSet = [];
    for (let i = n; i > 0; i--) {
      printSet.push(i);
    }
  }
  console.log(printSet);
}
