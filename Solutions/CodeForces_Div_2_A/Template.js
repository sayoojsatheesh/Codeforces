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
  let array = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let set1 = [];
  let set2 = [];
  let set3 = [];
  for (let i = 0; i < n; i++) {
    if (array[i] < 0) {
      set1.push(array[i]);
    } else if (array[i] == 0) {
      set3.push(array[i]);
    } else {
      set2.push(array[i]);
    }
  }
  if (set2.length == 0) {
    set2.push(set1[set1.length - 1]);
    set2.push(set1[set1.length - 2]);
    set1.pop();
    set1.pop();
  }
  if (set1.length % 2 == 0) {
    set3.push(set1[set1.length - 1]);
    set1.pop();
  }
  console.log(set1.length, ...set1);
  console.log(set2.length, ...set2);
  console.log(set3.length, ...set3);
}
