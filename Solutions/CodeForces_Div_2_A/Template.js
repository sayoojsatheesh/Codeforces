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
  let string = +readline().replace(/\n/g, "");
  let stringArray = string.split("").filter((item) => {
    if (item !== "{" && item !== " " && item !== "}" && item !== ",") {
      return item;
    }
  });
  let distinct = [];
  if (string.length <= 2) {
    console.log(0);
  } else {
    stringArray.map((item) => {
      let found = distinct.some((disintItem) => {
        return item == disintItem;
      });
      if (!found) {
        distinct.push(item);
      }
    });
  }
  console.log(distinct.length);
}
