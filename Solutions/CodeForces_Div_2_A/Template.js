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
  let r1=readline().replace(/\n/g, "").split(" ").map(x => parseInt(x));
  let r2=readline().replace(/\n/g, "").split(" ").map(x => parseInt(x));
  let r3=readline().replace(/\n/g, "").split(" ").map(x => parseInt(x));
  let r4=readline().replace(/\n/g, "").split(" ").map(x => parseInt(x));
  let r5=readline().replace(/\n/g, "").split(" ").map(x => parseInt(x));

}
