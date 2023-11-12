let row = 2;
let col = 3;
let grid = [
  ["P", "P", "W"],
  ["W", ".", "P"],
];
let eatenCount = 0;

for (let i = 0; i < row; i++) {
  // console.log(i,grid)
  for (let j = 0; j < col; j++) {
    if (grid[i][j] === "W") {
      let flag = false;
      if (i !== 0 & !flag) {
        flag = lookUp(i, j);
      }
      if (i !== row - 1 & !flag) {
        flag = lookDown(i, j);
      }
      if (j !== 0 & !flag) {
        flag = lookLeft(i, j);
      }

      if (j !== col - 1 & !flag) {
        flag = lookRight(i, j);
      }
    }
  }
}

function lookUp(row, col) {
  if (grid[row - 1][col] === "P") {
   
    eatenCount++;
    grid[row - 1][col] = ".";
    return true;
  }
}

function lookDown(row, col) {
  if (grid[row + 1][col] === "P") {

    eatenCount++;
    grid[row + 1][col] = ".";
    return true;
  }
}

function lookLeft(row, col) {
  if (grid[row][col - 1] === "P") {

    eatenCount++;
    grid[row][col - 1] = ".";
    return true;
  }
}

function lookRight(row, col) {
  if (grid[row][col + 1] === "P") {

    eatenCount++;
    grid[row][col + 1] = ".";
    return true;
  }
}

console.log(eatenCount);
