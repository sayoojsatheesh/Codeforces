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
  let n = temp[0];
  let k = temp[1];
  if (k == 0 && n == 1) {
    console.log(1);
    return;
  }
  if (n == 1 || n == k) {
    console.log(-1);
    return;
  }
  let permutaionArray = "";
  let left;

  if (k == n - 1) permutaionArray[1] = 1;

  for (let i = 2; i <= n; i++) {
    if (k > 0) {
      permutaionArray = permutaionArray + " " + i;
      k--;
    } else {
      if (!left) left = i;
      if (i !== n) {
        permutaionArray = permutaionArray + " " + i + 1;
      } else {
        permutaionArray = permutaionArray + " " + 1;
        permutaionArray = left + " " + permutaionArray;
      }
    }
  }

  console.log(permutaionArray);
}
