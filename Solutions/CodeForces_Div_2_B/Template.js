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
  let n = parseInt(readline());
  let trees = [];
  for (let i = 0; i < n; i++) {
    trees.push(parseInt(readline()))
  }
  let time = 0;
  let treesPointer = 0;
  time = time + trees[treesPointer] + 1;
  while (treesPointer < n - 1) {
    if (trees[treesPointer + 1] > trees[treesPointer]) {
      let climpTime = trees[treesPointer + 1] - trees[treesPointer];
      time = time + climpTime + 2; // 2 because 1 for jump and 1 for eat //
    } else {
      let climpDown = trees[treesPointer];
      let climpUp = trees[treesPointer + 1];
      time = time + climpDown + climpUp + 1;
    }
    treesPointer++;
  }
  console.log(time);
}
