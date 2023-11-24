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
  let numberOfSections = +readline().replace(/\r/g, "");
  let sections = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));

  if (numberOfSections == 1) {
    console.log(1);
    return;
  }
  let maxValue = 0;

  for (let i = 0; i < numberOfSections; i++) {
    let rightCount = lookRight(i);
    let leftCount = lookLeft(i);
    let total = rightCount + leftCount + 1;
    maxValue = Math.max(maxValue, total);
  }

  console.log(maxValue);

  function lookRight(start) {
    if (start == sections.length - 1) return 0;

    let counter = 0;
    for (let i = start; i < numberOfSections; i++) {
      if (sections[i + 1] <= sections[i]) {
        counter++;
      } else {
        return counter;
      }
    }
  }

  function lookLeft(start) {
    if (start == 0) {
      return 0;
    }
    let counter = 0;
    for (let i = start; i >= 0; i--) {
      if (sections[i - 1] <= sections[i]) {
        counter++;
      } else {
        return counter;
      }
    }
  }
}
