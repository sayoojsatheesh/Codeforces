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
  // Number of lanterns and length of the street
  let [n, l] = readline().split(" ").map(Number);

  // Positions of lanterns
  let lanterns = readline().split(" ").map(Number);

  // Sort the lantern positions in ascending order
  lanterns.sort((a, b) => a - b);

  // Initialize the maximum distance to the first lantern position
  let maxDistance = lanterns[0];

  // Iterate through the lantern positions and calculate the maximum gap
  for (let i = 1; i < n; i++) {
    let gap = (lanterns[i] - lanterns[i - 1]) / 2;
    maxDistance = Math.max(maxDistance, gap);
  }

  // Consider the distance to the last lantern and the street ends
  maxDistance = Math.max(maxDistance, l - lanterns[n - 1]);

  // Output the result with 10 decimal places
  console.log(maxDistance.toFixed(10));
}

// ********** Code End **********
