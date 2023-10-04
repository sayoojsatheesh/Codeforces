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
  let numbers = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));

  let i = 0;
  while (i < n) {
    let count = 0;
    for (let j = 1; j <= Math.ceil(numbers[i] / 2); j++) {
      if (numbers[i] % j == 0) {
        count++;
      }
      console.log(count)
      if (count > 3) {
        console.log("in")
        break;
      }
    }
    count++;
    if (count == 3) {
      console.log("YES");
    } else {
      console.log("NO");
    }
    i++;
  }
}
