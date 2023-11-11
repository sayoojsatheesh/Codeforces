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
  let m = temp[1];
  let not = [];
  for (let i = 0; i < m; i++) {
    let temp = readline()
      .replace(/\r/g, "")
      .split(" ")
      .map((x) => parseInt(x));
    not.push(temp);
  }
  let unqiue;
  for (let i = 1; i <= n; i++) {
    let find = not.find((item) => item === i);
    if (!find) {
      unqiue = i;
      break;
    }
  }
  for (let j = 1; j <= n; j++) {
    if (j !== unqiue) console.log(`${j} ${unqiue}`);
  }
}
