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
  let pointer = 0;
  while (pointer < n) {
    let home = n - 1;
    let away = 0;
    for (let i = 0; i < n; i++) {
      if (pointer == i) {
        continue;
      } else {
        if (teams[pointer][1] == teams[i][0]) {
          home++;
        } else {
          away++;
        }
      }
    }
    console.log(`${home} ${away}`)
    pointer++;
  }

}
