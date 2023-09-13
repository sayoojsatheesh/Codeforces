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
  let a = +readline().replace(/\n/g, "");
  let b = +readline().replace(/\n/g, "");
  let c = a + b;
  let tempA = removeZero(a.toString());
  let tempB = removeZero(b.toString());
  let tempC = removeZero(c.toString());
  function removeZero(string) {
    let str = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== "0") {
        str = str + string[i];
      }
    }
    return str;
  }
  let sumC = +tempA + +tempB;
  if (sumC == tempC) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
