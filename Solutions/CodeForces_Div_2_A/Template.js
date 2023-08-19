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
  let integer = readline().replace(/\n/g, "");
  if (integer < 0) {
    let tempValue1;
    let tempValue2;
    if (integer.length == 2) {
      console.log(0);
    } else if (integer.length == 3) {
      tempValue1 = "-" + integer[1];
      tempValue2 = "-" + integer[2];
      if (tempValue1 <= tempValue2) {
        console.log(tempValue1);
      } else {
        console.log(tempValue2);
      }
    } else {
      tempValue1 = integer.slice(0, integer.length - 1);
      tempValue2 =
        integer.slice(0, integer.length - 2) + integer[integer.length - 1];
      if (tempValue1 <= tempValue2) {
        console.log(tempValue1);
      } else {
        console.log(tempValue2);
      }
    }
  } else {
    console.log(integer);
  }
}
