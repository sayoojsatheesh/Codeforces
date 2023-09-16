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
  let houseArray = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let currentHouse = 1;
  let pointer = 0;

  let time = 0;
  while (pointer < m) {
    time = time + Math.abs(currentHouse - houseArray[pointer]);
    currentHouse = houseArray[pointer];
    pointer++;
    if (houseArray[pointer] < currentHouse) {
      time = time + Math.abs(currentHouse - n);
      currentHouse = 1;
    } else {
      time = time + Math.abs(currentHouse - houseArray[pointer]);
      pointer++;
    }
  }
  console.log(time + 1);
}
