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
  let string = readline().replace(/\r/g, "");
  let four = 0;
  let seven = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == 4) {
      four++;
    } else if (string[i] == 7) {
      seven++;
    }
  }
  if (four > 0 || seven > 0) {
    if (four == seven) {
      console.log(4);
      return;
    }
    four > seven ? console.log(4) : console.log(7);
  } else {
    console.log(-1);
  }
}
