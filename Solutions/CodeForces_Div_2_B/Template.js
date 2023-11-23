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
  let totalPaintings = +readline().replace(/\r/g, "");
  let totalPainters = +readline().replace(/\r/g, "");
  let timeTaken = [];
  for (let i = 0; i < totalPaintings; i++) {
    let temp = readline()
      .replace(/\r/g, "")
      .split(" ")
      .map((x) => parseInt(x));
    timeTaken.push(temp);
  }

  let timeCountArray = "";
  if (totalPainters == 1) {
    let timeCount = 0;
    for (let j = 0; j < timeTaken.length; j++) {
      timeCount = parseInt(timeCount) + parseInt(timeTaken[j]);
      console.log(timeCount);
    }
  } else {
    let timeCount = 0;
    let reminder = 0;
    for (let j = 0; j < timeTaken.length; j++) {
      if (j == 0) {
        timeCount = timeCount + timeTaken[j][0] + timeTaken[j][1];
        timeCountArray = timeCountArray + " " + timeCount;
      } else {
        if (timeTaken[j - 1][1] > timeTaken[j][0]) {
          reminder = reminder + (timeTaken[j - 1][1] - timeTaken[j][0]);
          timeCount = timeCount + timeTaken[j][1];
          timeCountArray = timeCountArray + " " + timeCount;
        } else {
          reminder = reminder + timeTaken[j - 1][1];
          let tempTime = timeTaken[j][0] - reminder + timeTaken[j][1];
          if (reminder > timeTaken[j][0]) {
            reminder = Math.abs(reminder - timeTaken[j][0]);
          } else {
            reminder = 0;
          }

          timeCount = timeCount + tempTime;
          timeCountArray = timeCountArray + " " + timeCount;
        }
      }
    }
  }

  console.log(timeCountArray);
}
