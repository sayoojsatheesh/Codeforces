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
    let temp = readline()
      .replace(/\r/g, "")
      .split(" ")
      .map((x) => parseInt(x));
    array.push(temp);
  }

  if (n == 1) {
    console.log(array[0]);
    return;
  }
  let firstItem = array[0];
  let filtredArray = array.filter((item) => {
    return item == firstItem;
  });
  if (array.length == filtredArray.length) {
    console.log(firstItem);
    return;
  }
  let count = {};
  for (let i = 0; i < array.length; i++) {
    count[array[i]] = count[array[i]] !== undefined ? ++count[array[i]] : 1;
  }
  let largest;
  let tempKey;
  for (let key in count) {
    if (!largest) {
      largest = count[key];
      tempKey = key;
      continue;
    }

    if (largest > count[key]) {
      console.log(tempKey);
    } else {
      console.log(key);
    }
  }
}
