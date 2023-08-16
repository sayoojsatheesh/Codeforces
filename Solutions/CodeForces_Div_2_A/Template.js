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
  // let n = readline().replace(/\n/g, "");
  let paragraph = readline().replace(/\r/g, "");
  const regex = /[a-z]*?h+[a-df-z]*?e+[a-km-z]*?l+[a-km-z]*?l+[a-np-z]*?o+/g;
  const found = paragraph.match(regex);
  found !== null ? console.log("YES") : console.log("NO");
}
