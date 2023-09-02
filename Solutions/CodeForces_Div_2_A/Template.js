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
    .split("")
    .map((x) => parseInt(x));
  let n = temp[0];
  let x = temp[1];
  let interstigMoments = [];
  for (let i = 0; i < n; i++) {
    let temp = readline()
      .replace(/\r/g, "")
      .split("")
      .map((x) => parseInt(x));
    interstigMoments.push(temp);
  }
  let playerCurrentlyAt = 1;
  let pointer = 0;
  let totalWatchTime = 1;
  while (playerCurrentlyAt < interstigMoments[interstigMoments.length - 1][1]) {
    let maxSkippable = interstigMoments[pointer][0];
    let timeAfterSkipping = playerCurrentlyAt + x;
    if (timeAfterSkipping <= maxSkippable) {
      playerCurrentlyAt = playerCurrentlyAt + x;
    } else {
      if (pointer !== interstigMoments.length - 1) {
        let watching = interstigMoments[pointer][1] - playerCurrentlyAt + 1;
        totalWatchTime = totalWatchTime + watching;
        playerCurrentlyAt = interstigMoments[pointer][1] + 1;
      } else {
        let watching = interstigMoments[pointer][1] - playerCurrentlyAt;
        totalWatchTime = totalWatchTime + watching;
        playerCurrentlyAt = interstigMoments[pointer][1];
      }
    }
    if (playerCurrentlyAt >= interstigMoments[pointer][1]) {
      pointer++;
    }
  }
  console.log(totalWatchTime);
}
