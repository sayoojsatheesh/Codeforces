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
  // let n=parseInt(readline());
  // String //
  let string1 = readline().replace(/\n/g, "").toLocaleLowerCase();
  let string2 = readline().replace(/\n/g, "").toLocaleLowerCase();
  if (string1 === string2) {
    console.log(0);
  } else {
    let string1Array = string1.split("");
    let string2Array = string2.split("");
    let subValue;
    for (let i = 0; i < string1Array.length; i++) {
      subValue = string1Array[i].charCodeAt(0) - string2Array[i].charCodeAt(0);
      if (subValue !== 0) {
        if (subValue < 0) {
          subValue = -1;
          break;
        } else {
          subValue = 1;
          break;
        }
      }
    }
    console.log(subValue);
  }
}
