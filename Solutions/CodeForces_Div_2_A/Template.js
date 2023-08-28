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
  let n = readline()
    .replace(/\n/g, "")
    .split("")
    .map((x) => parseInt(x));
  let l = BigInt(n[0]);
  let r = BigInt(n[1]);
  let totalNumbers = r - l + 1n; // Add 1n here

  for (let i = 0n; i < totalNumbers; i++) {
    for (let j = i + 1n; j < totalNumbers; j++) {
      for (let k = j + 1n; k < totalNumbers; k++) {
        let a = l + i;
        let b = l + j;
        let c = l + k;
        if (areCoprime(b, a) && areCoprime(c, b) && !areCoprime(c, a)) {
          console.log(`${a.toString()} ${b.toString()} ${c.toString()}`);
          return;
        }
      }
    }
  }

  function gcd(a, b) {
    if (b === 0n) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }

  function areCoprime(a, b) {
    return gcd(a, b) === 1n;
  }
}
