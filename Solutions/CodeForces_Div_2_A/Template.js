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
  let array = [];
  for (let i = 0; i < n; i++) {
    let x = readline()
      .replace(/\n/g, "")
      .split(" ")
      .map((x) => parseInt(x));
    array.push(x);
  }

  let total = 1;
  for (let i = 0; i < n; i++) {
    let s1 = array[i][0] + array[i][1] + array[i][2];
    
    total = total * s1;
  }
  if (total <= 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  console.log(total);
}
