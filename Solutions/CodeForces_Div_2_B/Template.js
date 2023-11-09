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
  let n = readline().replace(/\r/g, "");
  let array = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let all = array.every((item) => {
    return item == array[0];
  });
  if (all) {
    if (array[0] == 0) {
      console.log(n);
      return;
    }
    if (n == 1) {
      console.log(1);
      return;
    }
    console.log(2);
    return;
  }
  let startPosition = 0;
  let maxLength;
  while (startPosition <= n - 2) {
    let tempArray = [];
    for (let i = startPosition; i <= n - 2; i++) {
      if (array[i] + array[i + 1] == array[i + 2]) {
        tempArray.push(array[i]);
      } else {
        break;
      }
    }
    if (!maxLength) {
      maxLength = tempArray.length + 2;
    } else {
      if (tempArray.length + 2 > maxLength) {
        maxLength = tempArray.length + 2;
      }
    }
    startPosition++;
  }
  if (n == 1) {
    console.log(1);
    return;
  }
  console.log(maxLength);
}
