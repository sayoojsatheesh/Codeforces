let n = 3;
let teams = [
  [1, 2],
  [2, 1],
  [1, 3],
];
var rows = n;
var columns = 2;

// Create a 2D array with inner arrays pre-filled with 0, 0
var count = new Array(rows);

for (var i = 0; i < rows; i++) {
  count[i] = new Array(columns).fill(0);
}

let pointer = 0;
let home = n - 1;
while (pointer < n) {
  for (let i = pointer + 1; i < n; i++) {
    if (teams[pointer][1] == teams[i][0]) {
      count[pointer][0]++;
    } else {
      count[pointer][1]++;
    }

    if (teams[pointer][0] == teams[i][1]) {
      count[i][0]++;
    } else {
      count[i][1]++;
    }
  }
  count[pointer][0] = home + count[pointer][0];
  console.log(`${count[pointer][0]} ${count[pointer][1]}`);
  pointer++;
}
