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
  let temp = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let n = temp[0];
  let dCount = temp[1];
  let dirty = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));

  let sorted = dirty.sort();
  for (let i = 0; i < n; i++) {
    if (sorted[i] + 1 == sorted[i + 1] && sorted[i] + 2 == sorted[i + 2]) {
      console.log("NO");
      return;
    }
  }
  let lastOrFirst = sorted[0] == 1 || sorted[dCount - 1] == n;
  if (lastOrFirst) {
    console.log("NO");
    return;
  }
  console.log("YES");
}
