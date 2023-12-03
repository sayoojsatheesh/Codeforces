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
  let students = temp[0];
  let laces = temp[1];
  let orderOfStudents = [];
  for (let i = 0; i < laces; i++) {
    let temp = readline()
      .replace(/\r/g, "")
      .split(" ")
      .map((x) => parseInt(x));
    orderOfStudents.push(temp);
  }
  let totalGroups = 0;
  while (true) {
    // create a temp object //
    let order = {};
    let flag = false;

    for (let i = 0; i < orderOfStudents.length; i++) {
      if (!order[orderOfStudents[i][0]]) {
        order[orderOfStudents[i][0]] = { count: 1, index: i };
      } else {
        order[orderOfStudents[i][0]].count++;
      }

      if (!order[orderOfStudents[i][1]]) {
        order[orderOfStudents[i][1]] = { count: 1, index: i };
      } else {
        order[orderOfStudents[i][1]].count++;
      }
    }

    for (let key in order) {
      if (key !== -1) {
        if (order[key].count === 1) {
          orderOfStudents[order[key].index][0] = -1;
          orderOfStudents[order[key].index][1] = -1;
          flag = true;
        }
      }
    }

    if (flag) {
      totalGroups++;
    } else {
      console.log(totalGroups);
      return;
    }
  }
}
