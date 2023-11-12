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
  let temp = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let row = temp[0];
  let col = temp[1];
  let grid = [];
  for (let i = 0; i < row; i++) {
    let temp = readline()
      .replace(/\r/g, "")
      .split(" ")
      .map((x) => x);
      grid.push(temp)
  }
  let eatenCount = 0;

  for (let i = 0; i < row; i++) {
    // console.log(i,grid)
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "W") {
        let flag = false;
        if ((i !== 0) & !flag) {
          flag = lookUp(i, j);
        }
        if ((i !== row - 1) & !flag) {
          flag = lookDown(i, j);
        }
        if ((j !== 0) & !flag) {
          flag = lookLeft(i, j);
        }

        if ((j !== col - 1) & !flag) {
          flag = lookRight(i, j);
        }
      }
    }
  }

  function lookUp(row, col) {
    if (grid[row - 1][col] === "P") {
      eatenCount++;
      grid[row - 1][col] = ".";
      return true;
    }
  }

  function lookDown(row, col) {
    if (grid[row + 1][col] === "P") {
      eatenCount++;
      grid[row + 1][col] = ".";
      return true;
    }
  }

  function lookLeft(row, col) {
    if (grid[row][col - 1] === "P") {
      eatenCount++;
      grid[row][col - 1] = ".";
      return true;
    }
  }

  function lookRight(row, col) {
    if (grid[row][col + 1] === "P") {
      eatenCount++;
      grid[row][col + 1] = ".";
      return true;
    }
  }

  console.log(eatenCount);
}
