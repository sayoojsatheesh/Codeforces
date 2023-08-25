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
  let n = +readline()
    .replace(/\n/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let tracks =  readline()
    .replace(/\n/g, "")
    .split(" ")
    .map((x) => parseInt(x));
    let leastDiffrence;
    let leastDiffrenceIndex;
    for (let i = 0; i < n - 2; i++) {
      if (i == 0) {
        leastDiffrence = tracks[i + 2] - tracks[i];
        leastDiffrenceIndex = 1;
        continue;
      }
      let tempDiffrence = tracks[i + 2] - tracks[i];
      if (tempDiffrence < leastDiffrence) {
        leastDiffrence = tempDiffrence;
        leastDiffrenceIndex = i + 1;
      }
    }
    let filtredArray = tracks.filter((item, index) => {
      if (index !== leastDiffrenceIndex) {
        return item;
      }
    });
    let maxDiffrence;
    for (let i = 0; i < filtredArray.length; i++) {
      if (i == 0) {
        maxDiffrence = filtredArray[i + 1] - filtredArray[i];
        continue;
      }
      let tempDiffrence = filtredArray[i + 1] - filtredArray[i];
      if (maxDiffrence < tempDiffrence) {
        maxDiffrence = tempDiffrence;
      }
    }
    
    console.log(maxDiffrence);
}
