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
  let laptops = [];
  for (let i = 0; i < n; i++) {
    let temp = readline()
      .replace(/\n/g, "")
      .split(" ")
      .map((x) => parseInt(x));
    laptops.push(temp);
  }
  let print = "Poor Alex";
  let laptopsNew = laptops.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }

    if (a[0] > b[0]) {
      return 1;
    }

    if (a[1] < b[1]) {
      return -1;
    }

    if (a[1] > b[1]) {
      return 1;
    }

    return 0;
  });

  for (let i = 0; i < n; i++) {
    if (i !== n - 1) {
      if (
        laptopsNew[i] < laptopsNew[i + 1] &&
        laptopsNew[i] > laptopsNew[i + 1]
      ) {
        console.log(laptopsNew[i].charAt(0), laptopsNew[i + 1].charAt(0));
        console.log(laptopsNew[i].charAt(1), laptopsNew[i + 1].charAt(1));
        print = "Happy Alex";
        break;
      }
    }
  }
  console.log(print);
}
