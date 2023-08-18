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
  let n = +readline().replace(/\n/g, "");
  let array1 = readline()
    .replace(/\n/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let array2 = readline()
    .replace(/\n/g, "")
    .split(" ")
    .map((x) => parseInt(x));

  let array3 = [
    ...new Set(
      [
        ...array1.slice(0, array1.length),
        ...array2.slice(0, array2.length),
      ].sort()
    ),
  ];
  let output = "I become the guy.";
  for (let i = 0; i < n; i++) {
    if (i + 1 !== array3[i]) {
      output = "Oh, my keyboard!";
      break;
    }
  }

  console.log(output);
}
