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
  let array = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
    let total = 0;
    let circles = array.sort(function (a, b) {
      return b - a;
    });
    let last;
    if (n % 2 !== 0) {
      last = circles.pop();
      total=total+Math.PI*last
      n = n - 1;
    }
    
    if (n == 1) {
      console.log(3.14 * 1);
    } else {
      for (let i = 0; i < n; i += 2) {
        total =
          total +
          3.14159265358979323846 *
            (circles[i] * circles[i] - circles[i + 1] * circles[i + 1]);
      }
    }
    
    console.log(total);
}
