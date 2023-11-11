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
  let m = +readline().replace(/\r/g, "");
  let array = readline()
  .replace(/\r/g, "")
  .split(" ")
  .map((x) => parseInt(x));
  let tvs = array.sort(function (a, b) {
    return a - b;
  });
  let filterd = tvs.filter((item) => item < 0);
  let total = filterd.reduce((total, item, index) => {
    if (index < m - 1) {
      return (total = total + item);
    } else {
      return;
    }
  }, 0);
  console.log(Math.abs(total));
}
