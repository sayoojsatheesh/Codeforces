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
  let n1 = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let n2 = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let n3 = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let magicSquare = [n1, n2, n3];
  if (magicSquare[0][1] == magicSquare[0][2]) {
    magicSquare[0][0] = magicSquare[0][1];
    magicSquare[1][1] = magicSquare[0][1];
    magicSquare[2][2] = magicSquare[0][1];
  } else {
    let y = (magicSquare[0][2] + magicSquare[2][0]) / 2;
    magicSquare[1][1] = y;
    let magicNumber = magicSquare[1][0] + magicSquare[1][1] + magicSquare[1][2];
    magicSquare[0][0] = magicNumber - (magicSquare[0][1] + magicSquare[0][2]);
    magicSquare[2][2] = magicNumber - (magicSquare[2][1] + magicSquare[2][0]);
  }

  magicSquare.map((item) => {
    console.log(`${item[0]} ${item[1]} ${item[2]}`);
  });
}
