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
  let k = temp[2];
  let soliders = [];
  for (let i = 0; i < m; i++) {
    let temp = readline().replace(/\n/g, "");
    soliders.push(temp);
  }
  let binnary = [];
  for (let i = 0; i <= m; i++) {
    binnary.push(soliders[i].toString(2));
  }
  let friends = 0;
  let pointer = m;

  for (let i = 0; i < binnary.length - 1; i++) {
    let count = 0;
    for (let j = 0; j < binnary[i].length; j++) {
      if (binnary[i][j] !== binnary[pointer][j]) {
        count++;
      }
    }
    count = count + Math.abs(binnary[i].length - binnary[pointer].length);
    if (count <= k) {
      friends++;
    }
  }

  console.log(friends);
}
