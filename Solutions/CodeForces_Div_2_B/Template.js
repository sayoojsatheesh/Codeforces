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
  let pCount = temp[0];
  let qCount = temp[1];
  let l = temp[2];
  let r = temp[3];
  let p = [];
  let q = [];
  for (let i = 0; i < pCount; i++) {
    let temp = readline()
      .replace(/\r/g, "")
      .split(" ")
      .map((x) => parseInt(x));
    p.push(temp);
  }
  for (let j = 0; j < qCount; j++) {
    let temp = readline()
      .replace(/\r/g, "")
      .split(" ")
      .map((x) => parseInt(x));
    q.push(temp);
  }
  let count = 0;
  while (l <= r) {
    let flag = false;
    for (let j = 0; j < qCount; j++) {
      for (let i = 0; i < pCount; i++) {
        if (p[i][0] <= q[j][0] + l || p[i][1] >= q[j][1] + l) {
          flag = true;
          break;
        }
      }
    }
    if (flag) {
      count++;
    }
    l++;
  }
  console.log(count);
}
