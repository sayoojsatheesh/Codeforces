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
  // Number //
  // String //
  let temp=readline().replace(/\r/g, "").split(" ").map((x) => parseInt(x));
  let n = temp[0];
  let t = temp[1];
  let s = readline().replace(/\n/g, "");

  let queue = s.split('');

  for (let second = 0; second < t; second++) {
    for (let i = 0; i < n - 1; i++) {
      if (queue[i] === 'B' && queue[i + 1] === 'G') {
        // Swap the positions of a boy and a girl.
        queue[i] = 'G';
        queue[i + 1] = 'B';
        i++; // Skip the next position since it's now a girl.
      }
    }
  }

  let finalArrangement = queue.join('');
  console.log(finalArrangement);
}
