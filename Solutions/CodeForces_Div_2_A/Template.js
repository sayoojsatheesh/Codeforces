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
    .replace(/\n/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let r = temp[0];
  let c = temp[1];
  let maze = [];
  for (let i = 0; i < r; i++) {
    let teamMembers = readline()
      .replace(/\n/g, "")
      .split(" ")
      .map((x) => parseInt(x));
    maze.push(teamMembers);
  }

  function deepCopy(arr) {
    return arr.map((innerArr) => [...innerArr]);
  }
  let mazeTemp = deepCopy(maze);
  let cakeEate = 0;
  let tempcakeEate;
  for (let i = 0; i < r; i++) {
    tempcakeEate = 0;
    for (let j = 0; j < c; j++) {
      if (maze[i][j] == "S") {
        mazeTemp[i] = [...maze[i]];
        tempcakeEate = 0;
        break;
      } else if (maze[i][j] == ".") {
        tempcakeEate = tempcakeEate + 1;
        mazeTemp[i][j] = "ate";
      }
    }

    cakeEate = cakeEate + tempcakeEate;
  }
  tempcakeEate = 0;
  let i = 0;
  while (i < c) {
    tempcakeEate = 0;
    for (let j = 0; j < r; j++) {
      if (mazeTemp[j][i] == "S") {
        tempcakeEate = 0;
        break;
      } else if (mazeTemp[j][i] == ".") {
        tempcakeEate = tempcakeEate + 1;
        mazeTemp[j][i] = "ate";
      }
    }
    cakeEate = cakeEate + tempcakeEate;
    i++;
  }

  console.log(cakeEate);
}
