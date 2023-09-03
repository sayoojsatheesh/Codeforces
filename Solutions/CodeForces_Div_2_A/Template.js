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
  let mPoints = temp[0];
  let vPoints = temp[1];
  let mTime = temp[2];
  let vTime = temp[3];
  let mTotal = Math.max(3*mPoints/10,mPoints - (mPoints / 250) * mTime);
  let vTotal = Math.max(3*vPoints/10,vPoints - (vPoints / 250) * vTime);
  
  if (mTotal > vTotal) {
    console.log("Misha");
  } else if (vTotal > mTotal) {
    console.log("Vasya");
  } else {
    console.log("Tie");
  }
}
