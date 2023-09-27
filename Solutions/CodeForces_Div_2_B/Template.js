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

  let [n, l] = readline().split(" ").map(Number);
  let lanterns = readline().split(" ").map(Number);
  lanterns.sort((a, b) => a - b);
  let maxDistance = lanterns[0];

  for (let i = 1; i < n; i++) {
    let gap = (lanterns[i] - lanterns[i - 1]) / 2;
    maxDistance = Math.max(maxDistance, gap);
  }

  maxDistance = Math.max(maxDistance, l - lanterns[n - 1]);

  console.log(maxDistance.toFixed(10));
}


