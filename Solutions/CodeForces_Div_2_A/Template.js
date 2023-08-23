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
    .split(" ")
    .map((x) => parseInt(x));
  let n = temp[0];
  let bottles = temp[1];
  let litters = temp[2];
  let lime = temp[3];
  let cut = temp[4];
  let salt = temp[5];
  let nl = temp[6];
  let np = temp[7];
  let totalToats = Math.floor((bottles * litters) / nl);

  let totalLimes = Math.floor(lime * cut);
  let totalSalt = Math.floor(salt / np);
  console.log(totalToats, totalLimes, totalSalt);
  let min = Math.min(totalToats, totalLimes, totalSalt);
  console.log(min / n);
}

