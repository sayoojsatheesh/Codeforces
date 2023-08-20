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
  let t = readline()
    .replace(/\n/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let t1 = [];
  let t2 = [];
  let t3 = [];
  for (let i = 0; i < n; i++) {
    if (t[i] === 1) {
      t1.push({ value: 1, index: i + 1 });
    } else if (t[i] === 2) {
      t2.push({ value: 2, index: i + 1 });
    } else {
      t3.push({ value: 3, index: i + 1 });
    }
  }
  let count = 0;
  let print = "";
  for (let i = 0; i < n; i++) {
    if (t1[i] && t2[i] && t3[i]) {
      count++;
      print = print + `${t1[i].index} ${t2[i].index} ${t3[i].index} \n`;
    } else {
      break;
    }
  }
  console.log(count);
  console.log(print);
}
