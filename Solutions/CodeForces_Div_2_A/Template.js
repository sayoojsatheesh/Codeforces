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
  let cordinatePoints=[]
  for (let i = 0; i < n; i++) {
    let x = readline().replace(/\r/g, "").split(" ").map((x) => parseInt(x));
    cordinatePoints.push(x)
  }
  let pointer = 0;
  let left = false;
  let right = false;
  let up = false;
  let down = false;
  let printCount = 0;
  while (pointer < n) {
    for (let i = 0; i < n; i++) {
      if (pointer !== i) {
        if (
          cordinatePoints[pointer][0] > cordinatePoints[i][0] &&
          cordinatePoints[pointer][1] == cordinatePoints[i][1]
        ) {
          right = true;
        } else if (
          cordinatePoints[pointer][0] < cordinatePoints[i][0] &&
          cordinatePoints[pointer][1] == cordinatePoints[i][1]
        ) {
          left = true;
        } else if (
          cordinatePoints[pointer][0] == cordinatePoints[i][0] &&
          cordinatePoints[pointer][1] < cordinatePoints[i][1]
        ) {
          down = true;
        } else if (
          cordinatePoints[pointer][0] == cordinatePoints[i][0] &&
          cordinatePoints[pointer][1] > cordinatePoints[i][1]
        ) {
          up = true;
        }
      }
    }
    if (right && left && up && down) {
      printCount++;
    }
    pointer++;
    left = false;
    right = false;
    up = false;
    down = false;
  }
  console.log(printCount);
}
