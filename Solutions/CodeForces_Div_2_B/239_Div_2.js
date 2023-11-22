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
  let temp1 = readline().replace(/\r/g, "");
  let temp2 = readline().replace(/\r/g, "");
  let string1 = temp1.split("").sort();
  let string2 = temp2.split("");
  let pointer = 0;
  let areaCount = 0;
  while (pointer < string1.length) {
    if (string1[pointer] == string1[pointer + 1]) {
      let index = string2.findIndex((item) => item == string1[pointer]);
      areaCount++;
      string2[index] = 1;
    } else {
      let flag = false;
      for (let i = 0; i < string2.length; i++) {
        if (string1[pointer] == string2[i]) {
          if (!flag) {
            areaCount++;
            flag = true;
          }
          string2[i] = 1;
        }
      }
    }
    if (string2.every((item) => item == 1)) {
      console.log(areaCount);
      return;
    }
    pointer++;
  }
  console.log(-1);
}
