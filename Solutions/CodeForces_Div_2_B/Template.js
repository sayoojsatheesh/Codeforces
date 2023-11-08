"use strict";
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let a = [];
let b = [];

rl.question("", (firstLine) => {
  [n, m] = firstLine.split(" ").map(Number);

  rl.question("", (secondLine) => {
    a = secondLine.split(" ").map(Number);

    rl.question("", (thirdLine) => {
      b = thirdLine.split(" ").map(Number);

      let bestPossible = n;
      if (bestPossible > m) bestPossible = m;

      for (let i = bestPossible; i >= 0; i--) {
        let ok = true;
        for (let j = 0; j < i; j++) {
          if (a[j] > b[m - i + j]) {
            ok = false;
            break;
          }
        }
        if (ok) {
          console.log(n - i);
          rl.close();
          return;
        }
      }
    });
  });
});
