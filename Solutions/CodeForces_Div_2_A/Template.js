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
  let n = +readline().replace(/\n/g, "");
  let upper = [];
  let lower = [];
  for (let i = 0; i < n; i++) {
    let x = readline()
      .replace(/\r/g, "")
      .split(" ")
      .map((x) => parseInt(x));
    upper.push(x[0]);
    lower.push(x[1]);
  }
  let uppersum = upper.reduce(
    (ob, item) => {
      ob.total = ob.total + item;
      if (item % 2 !== 0) {
        ob.odd++;
      }
      return ob;
    },
    { total: 0, odd: 0 }
  );
  let lowersum = lower.reduce(
    (ob, item) => {
      ob.total = ob.total + item;
      if (item % 2 !== 0) {
        ob.odd++;
      }
      return ob;
    },
    { total: 0, odd: 0 }
  );
  if (lowersum.total % 2 == 0 && uppersum.total % 2 == 0) {
    console.log(0);
    return;
  } else if (n == 1) {
    console.log(-1);
    return;
  } else if (
    (uppersum % 2 == 0 && lowersum % 2 !== 0) ||
    (uppersum % 2 !== 0 && lowersum % 2 == 0)
  ) {
    console.log(-1);
    return;
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (
      (upper[i] % 2 == 0 && lower[i] % 2 !== 0) ||
      (upper[i] % 2 !== 0 && lower[i] % 2 == 0)
    ) {
      let temp = upper[i];
      upper[i] = lower[i];
      lower[i] = temp;
      count++;
    }
    let uppersumNew = upper.reduce(
      (ob, item) => {
        ob.total = ob.total + item;
        if (item % 2 !== 0) {
          ob.odd++;
        }
        return ob;
      },
      { total: 0, odd: 0 }
    );
    let lowersumNew = lower.reduce(
      (ob, item) => {
        ob.total = ob.total + item;
        if (item % 2 !== 0) {
          ob.odd++;
        }
        return ob;
      },
      { total: 0, odd: 0 }
    );
    if (uppersumNew.total % 2 == 0 && lowersumNew.total % 2 == 0) {
      console.log(count);
      return;
    }
  }
  console.log(-1)
}
