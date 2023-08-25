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
  let n = +readline()
    .replace(/\n/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let set =  readline()
    .replace(/\n/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let chestCount = 0;
  let bicepsCount = 0;
  let backCount = 0;
  let flag = "chest";
  for (let i = 0; i < n; i++) {
    if (flag == "chest") {
      chestCount = chestCount + set[i];
      flag = "biceps";
    } else if (flag == "biceps") {
      bicepsCount = bicepsCount + set[i];
      flag = "back";
    } else {
      backCount = backCount + set[i];
      flag = "chest";
    }
  }
  if (chestCount > bicepsCount && chestCount > backCount) {
    console.log("chest");
  } else if (bicepsCount > chestCount && bicepsCount > backCount) {
    console.log("biceps");
  } else {
    console.log("back");
  }
}
