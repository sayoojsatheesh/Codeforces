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
  let temp = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let n = temp[0];
  let m = temp[1];
  let chessBoard = [];
  for (let i = 0; i < n; i++) {
    let temp = readline()
      .replace(/\r/g, "")
      .split(" ")
      .map((x) => x.toString());
    chessBoard.push(temp);
  }
  let chessMan = "B";
  let flag = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (chessBoard[i][j] == ".") {
        if (i + (j % 2) == 0) {
          chessBoard[i][j] = "W";
        } else {
          chessBoard[i][j] = "B";
        }
      }
    }
  }
  let print = "";
  chessBoard.map((item) => {
    for (let i = 0; i < item.length; i++) {
      print = print + item[i] + " ";
    }
    print = print + "\n";
  });
  console.log(print);
}
