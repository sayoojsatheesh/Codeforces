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
  let x1 = temp[0];
  let y1 = temp[1];
  let x2 = temp[2];
  let y2 = temp[3];

  let x3;
  let y3;
  let x4;
  let y4;
  if (x1 != x2 && y1 != y2 && Math.abs(x1 - x2) != Math.abs(y1 - y2)) {
    console.log(-1);
    return;
  } else if (x1 == x2) {
    let length = Math.abs(y2 - y1);
    y3 = y1;
    y4 = y2;
    x3 = x1 + length;
    x4 = x2 + length;
    console.log(x3, y3, x4, y4);
  } else if (y1 == y2) {
      x3=x1;
      x4=x2;
      let length=Math.abs(x1-x2);
      y3=y1+length;
      y4=y2+length;
      console.log(x3, y3, x4, y4);
  } else {
    console.log(x1, y2, x2, y1);
  }
  

  
 
}