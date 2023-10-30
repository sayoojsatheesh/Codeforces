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
  let n = readline().replace(/\r/g, "");
  let teams = [];
  for (let i = 0; i < n; i++) {
    let temp = readline()
      .replace(/\r/g, "")
      .split(" ")
      .map((x) => parseInt(x));
    teams.push(temp);
  }
  var rows = n;
var columns = 2;

// Create a 2D array with inner arrays pre-filled with 0, 0
var count = new Array(rows);

for (var i = 0; i < rows; i++) {
  count[i] = new Array(columns).fill(0);
}

let pointer = 0;
let home = n - 1;
while (pointer < n) {
  for (let i = pointer + 1; i < n; i++) {
    if (teams[pointer][1] == teams[i][0]) {
      count[pointer][0]++;
    } else {
      count[pointer][1]++;
    }

    if (teams[pointer][0] == teams[i][1]) {
      count[i][0]++;
    } else {
      count[i][1]++;
    }
  }
  count[pointer][0] = home + count[pointer][0];
  console.log(`${count[pointer][0]} ${count[pointer][1]}`);
  pointer++;
 
}

}
