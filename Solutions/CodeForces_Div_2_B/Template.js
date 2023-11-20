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
  let flag = true;
  let order = [];
  let temp = n;
  let count = 0;
  while (flag) {
    if (temp % 2 == 0) {
      order.push(temp / 2);
      temp = temp / 2;
    } else if (temp !== 1) {
      let all = allDivisors(temp);
      order = [...all, ...order];
      flag = false;
    }
    if (temp == 1) {
      break;
    }
  }
  order = order.sort((a, b) => {
    return b - a;
  });
  console.log(`${n} ${[...order].join(" ")}`);

  function allDivisors(number) {
    let temp = [1];
    let tempNumber = number;
    let tempSatrt = number - 1;
    for (let i = tempSatrt; i > 1; i--) {
      if (tempNumber % i == 0) {
        temp.push(i);
        tempNumber = temp[temp.length - 1];
        tempSatrt = temp[temp.length - 1] - 1;
      }
    }
    return temp;
  }
}
