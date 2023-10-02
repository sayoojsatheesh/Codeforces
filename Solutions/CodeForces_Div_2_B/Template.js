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
  let array = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
    let sortedArray = [...array].sort(function (a, b) {
      return a - b;
    });
    if (JSON.stringify(sortedArray) === JSON.stringify(array)) {
      console.log("yes");
      console.log("1 1");
      return;
    }
    
    let start;
    let end;
    for (let i = 0; i < array.length; i++) {
      if (sortedArray[i] !== array[i]) {
        start = i;
        break;
      }
    }
    
    for (let i = array.length - 1; i >= 0; i--) {
      if (sortedArray[i] !== array[i]) {
        end = i;
        break;
      }
    }
    let endValue = end;
    for (let j = start; j <= end; j++) {
      let temp = array[j];
      array[j] = array[end];
      array[end] = temp;
      end--;
    }
    if (JSON.stringify(sortedArray) === JSON.stringify(array)) {
      console.log("yes");
      console.log(`${start} ${endValue}`);
    } else {
      console.log("no");
    }
}
