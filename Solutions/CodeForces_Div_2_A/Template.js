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
  let n = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let a = n[0];
  let b = n[1];
  let c = n[2];
  let s1 = Math.sqrt((a * b) / c);
  let s2 = Math.sqrt((a * c) / b);
  let s3 = Math.sqrt((b * c) / a);
  let sum = 4 * (s1 + s2 + s3);
  console.log(sum);
}
