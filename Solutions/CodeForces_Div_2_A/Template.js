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
  let n = temp[0];
  let k = temp[1];
  let list=[];
  for(let i=0;i<n;i++){
    let temp = readline()
    .replace(/\n/g, "")
    .split(" ")
    .map((x) => parseInt(x));
    list.push(temp)
  }
  let totalList = [];
  let count = 0;
  for (let i = 0; i < n; i++) {
    let flag = false;
    const total = list[i].slice(1).reduce((total, item, index) => {
      if (item < k) {
        flag = true;
      }
      return total + item;
    }, 0);
    if (flag) {
      count++;
    }
    totalList.push({ total, index: list[i][0] });
  }
  let sortedList = totalList.sort((a, b) => {
    return a.total - b.total;
  });
  
  let order = "";
  sortedList.map((item) => {
    order = order + `${item.index} `;
  });
  console.log(count);
  if (count) {
    console.log(order);
  }
}  