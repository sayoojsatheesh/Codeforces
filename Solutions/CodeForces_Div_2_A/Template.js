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
  let n = readline().replace(/\n/g, "");
  let square = [];
  for (let i = 0; i < n; i++) {
    let x = readline()
      .replace(/\n/g, "")
      .split("")
      .map((x) => parseInt(x));
    square.push(x);
  }
  let countLeft = 0;
  let countRight = n - 1;
  let alphabetInDiagonal;
  let diagonalChecked;
  let lettersOnOtherSquare = square[0][1];
  for (let i = 0; i < n; i++) {
    diagonalChecked = "UnCheked";
    for (let j = 0; j < n; j++) {
      if (
        square[i][countLeft] == square[i][countRight] &&
        diagonalChecked == "UnCheked"
      ) {
        if (alphabetInDiagonal) {
          if (
            square[i][countLeft] !== alphabetInDiagonal ||
            square[i][countRight] !== alphabetInDiagonal
          ) {
            console.log("NO");
            return;
          }
        }
        alphabetInDiagonal = square[i][countLeft];
        diagonalChecked = "Cheked";
      } else if (
        diagonalChecked == "UnCheked" &&
        square[i][countLeft] !== square[i][countRight]
      ) {
        diagonalChecked = "NotEqual";
      }
      if (j !== countLeft && j !== countRight) {
        if (lettersOnOtherSquare) {
          if (
            square[i][j] == alphabetInDiagonal ||
            square[i][j] !== lettersOnOtherSquare
          ) {
            console.log("NO");
            return;
          }
        }
      }
    }
    countLeft++;
    countRight--;

    if (diagonalChecked == "NotEqual") {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}
