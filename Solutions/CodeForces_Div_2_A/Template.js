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
  let n = +readline().replace(/\n/g, "");
  let count = 0;
  let flag = true;
  if (n.toString().includes(8)) {
    count++;
    n++;
  }
  while (flag) {
    if (n.toString().includes(8)) {
      if (count) flag = false;
    } else {
      count++;
      n++;
    }
  }
  console.log(count);
}
