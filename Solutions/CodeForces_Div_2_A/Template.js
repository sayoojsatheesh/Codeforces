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
  let s = temp[0];
  let n = temp[1];
  let rounds=[]
  for (let i = 0; i < n; i++) {
    let temp2 = readline()
    .replace(/\n/g, "")
    .split(" ")
    .map((x) => parseInt(x));
    rounds.push(temp2);
  }

  let flag = "YES";
for (let i = 0; i < n; i++) {
  if (rounds[i][0] < s) {
    s = s + rounds[i][1];
  } else {
    flag = "NO";
    break;
  }
}
console.log(flag);

}
