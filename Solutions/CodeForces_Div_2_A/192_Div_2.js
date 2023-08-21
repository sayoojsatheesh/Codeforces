let r = 3;
let c = 4;
let maze = [
  ["S", ".", ".", "."],
  [".", ".", ".", "."],
  [".", ".", "S", "."],
];
function deepCopy(arr) {
  return arr.map((innerArr) => [...innerArr]);
}
let mazeTemp = deepCopy(maze);
let cakeEate = 0;
let tempcakeEate;
for (let i = 0; i < r; i++) {
  tempcakeEate = 0;
  for (let j = 0; j < c; j++) {
    if (maze[i][j] == "S") {
      mazeTemp[i] = [...maze[i]];
      tempcakeEate = 0;
      break;
    } else if (maze[i][j] == ".") {
      tempcakeEate = tempcakeEate + 1;
      mazeTemp[i][j] = "ate";
    }
  }

  cakeEate = cakeEate + tempcakeEate;
}
tempcakeEate = 0;
let i = 0;
while (i < c) {
  tempcakeEate = 0;
  for (let j = 0; j < r; j++) {
    if (mazeTemp[j][i] == "S") {
      tempcakeEate = 0;
      break;
    } else if (mazeTemp[j][i] == ".") {
      tempcakeEate = tempcakeEate + 1;
      mazeTemp[j][i] = "ate";
    }
  }
  cakeEate = cakeEate + tempcakeEate;
  i++;
}

console.log(cakeEate);
