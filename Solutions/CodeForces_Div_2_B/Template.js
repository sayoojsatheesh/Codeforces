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
  let temp = readline()
    .replace(/\r/g, "")
    .split(" ")
    .map((x) => parseInt(x));
  let days = temp[0];
  let sumTime = temp[1];
  let sc = [];
  for (let i = 0; i < days; i++) {
    let temp = readline()
      .replace(/\r/g, "")
      .split(" ")
      .map((x) => parseInt(x));
    sc.push(temp);
  }
  if (days == 1) {
    if (sc[0][0] <= sumTime && sumTime <= sc[0][1]) {
      console.log("YES");
      console.log(sumTime);
      return;
    } else {
      console.log("NO");
      return;
    }
  }
  let total = 0;

  for (let i = 0; i < days; i++) {
    total = total + sc[i][1];
  }
  let reminder = total -sumTime;


  if (reminder < 0) {
    console.log("NO");
  } else if (reminder == 0) {
    console.log("YES");
    for (let i = 0; i < days; i++) {
      console.log(sc[i][1]);
    }
  } else {
    for (let i = 0; i < days; i++) {
      let tempValue = sc[i][1] - reminder;
      if (sc[i][0] <= tempValue) {
        sc[i][1] = tempValue;
        reminder=0;
        break;
      } else {
        let temp = sc[i][1] - sc[i][0];
        sc[i][1] = sc[i][0];
        reminder = reminder - temp;
      }
    }
    if(reminder !==0){
        console.log("NO");
        return;
    }
    console.log("YES");
    for (let i = 0; i < days; i++) {
      console.log(sc[i][1]);
    }
  }
}
