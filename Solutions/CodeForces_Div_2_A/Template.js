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
  let d = temp[1];
  let t = readline()
    .replace(/\n/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let totalTime = t.reduce((sum, item) => {
    return (sum = sum + item);
  }, 0);
  let breakTime = (n - 1) * 10;
  let totalTimeTaken = totalTime + breakTime;
  let jokesCracked;
  if (totalTimeTaken > d) {
    console.log(-1);
    return;
  } else {
    let jokesCrakedInBreak = (n - 1) * 2;
    let jokesCrakedAtEnd = (d - totalTimeTaken) / 5;
    jokesCracked = jokesCrakedInBreak + jokesCrakedAtEnd;
    console.log(jokesCracked);
  }
}
