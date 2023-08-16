let r1 = [0, 0, 0, 0, 0];
let r2 = [0, 0, 0, 0, 0];
let r3 = [0, 0, 0, 0, 0];
let r4 = [0, 0, 0, 0, 0];
let r5 = [0, 0, 1, 0, 0];
let array = [r1, r2, r3, r4, r5];
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (array[i][j] == 1) {
      let minimumCount = 0;
      let rowCount = i - 2;
      let colCount = j - 2;
      minimumCount = Math.abs(rowCount) + Math.abs(colCount);
      console.log(minimumCount);
    }
  }
}
