let n = 3;
let checkBoard = [
  ["x", "x", "o"],
  ["x", "o", "x"],
  ["o", "x", "x"],
];
let flagIsEven = true;
if (n == 1 && checkBoard[0] == "o") {
  console.log("NO");
  return;
} else if (n == 1 && checkBoard[0] == "x") {
  console.log("YES");
  return;
}
let findX = checkBoard.some((item) => {
  let subFind = item.some((item) => {
    if (item == "x") {
      return true;
    }
  });
  if (subFind) {
    return true;
  }
});
if (!findX) {
  console.log("NO");
  return;
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i == 0) {
      let left = checkBoard[i][j - 1] == "o" ? 1 : 0;
      let right = checkBoard[i][j + 1] == "o" ? 1 : 0;
      let bottom = 0;
      if (n !== 1) {
        bottom = checkBoard[i + 1][j] == "o" ? 1 : 0;
      }
      let count = left + right + bottom;
      if (count !== 0 && count % 2 !== 0) {
        flagIsEven = false;
      }
    } else if (i == n - 1) {
      let left = checkBoard[i][j - 1] == "o" ? 1 : 0;
      let right = checkBoard[i][j + 1] == "o" ? 1 : 0;
      let top = checkBoard[i - 1][j] == "o" ? 1 : 0;
      let count = left + right + top;
      if (count !== 0 && count % 2 !== 0) {
        flagIsEven = false;
      }
    } else {
      let left = checkBoard[i][j - 1] == "o" ? 1 : 0;
      let right = checkBoard[i][j + 1] == "o" ? 1 : 0;
      let top = checkBoard[i + 1][j] == "o" ? 1 : 0;
      let bottom = checkBoard[i - 1][j] == "o" ? 1 : 0;
      let count = left + right + top + bottom;
      if (count !== 0 && count % 2 !== 0) {
        flagIsEven = false;
      }
    }
  }
}
if (flagIsEven) {
  console.log("YES");
} else {
  console.log("NO");
}
