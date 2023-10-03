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
  let n = +readline().replace(/\r/g, "");
  let m = +readline().replace(/\r/g, "");
  let words = [];
  for (let i = 0; i < m; i++) {
    words.push(
      readline()
        .replace(/\r/g, "")
        .split(" ")
        .map((x) => x)
    );
  }
  let lectures = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => x);
  let output = "";

  for (let i = 0; i < lectures.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (lectures[i] == words[j][0]) {
        if (words[j][0].length < words[j][1].length) {
          output = output + " " + words[j][0];
          break;
        } else {
          output = output + " " + words[j][1];
          break;
        }
      }
    }
  }

  console.log(output);
}
