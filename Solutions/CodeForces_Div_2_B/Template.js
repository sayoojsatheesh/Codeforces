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
  let stringArray = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => x);
  let k = +readline().replace(/\r/g, "");
  const numberArray = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  console.log(stringArray, k, numberArray);
  let largest;
  let indexValue;
  numberArray.map((item, index) => {
    if (index == 0) {
      largest = item;
      indexValue = index;
    }
    if (item > largest) {
      largest = item;
      indexValue = index;
    }
  });
  let total = 0;
  for (let i = 0; i < stringArray.length; i++) {
    const character = stringArray[i]; // Change this to the character you want to find the ASCII value of
    const asciiValue = numberArray[character.charCodeAt(0) - 97];
    total = total + (i + 1) * asciiValue;
  }
  let starting = stringArray.length + 1;
  while (starting <= k + stringArray.length) {
    total = total + starting * largest;
    starting++;
  }
  console.log(total);
}
