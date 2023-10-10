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
  let amount = readline().replace(/\r/g, "").split(" ");
  let amountChanged = [...amount];
  let largest;
  let pointer = 0;
  let lastDigit = amount[amount.length - 1];
  while (pointer < amount.length - 1) {
    if (amount[pointer] % 2 == 0) {
      if (!largest) {
        let temp = amountChanged[pointer];
        amountChanged[pointer] = lastDigit;
        amountChanged[amount.length - 1] = temp;
        largest = amountChanged.join("");
      } else {
        let tempAmount = [...amount];
        let temp = tempAmount[pointer];
        tempAmount[pointer] = lastDigit;
        tempAmount[tempAmount.length - 1] = temp;
        if (largest < tempAmount.join("")) {
          largest = tempAmount.join("");
          if (temp == 0) {
            break;
          }
        }
      }
    }
    pointer++;
  }
  console.log(largest ? largest : -1);
}
