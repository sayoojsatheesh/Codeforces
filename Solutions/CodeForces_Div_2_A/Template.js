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
  let temp = readline()
    .replace(/\n/g, "")
    .split(" ")
    .map((x) => parseInt(x));
    let n=temp[0];
    let m=temp[1];
    console.log(n,m)
    if (n < m) {
      console.log(-1);
      return;
    } else {
      let countOnes = 0;
      let minimumsteps = 0;
      let flag=false;
      while (n > 0) {
        let half = (n - countOnes) / 2;
        if (half % m == 0) {
          minimumsteps = half + countOnes;
          flag=true;
          break;
        } else {
          countOnes++;
        }
      }
      if(flag){
        console.log(minimumsteps);
      }else{
        console.log(-1)
      }
     
    }
}
