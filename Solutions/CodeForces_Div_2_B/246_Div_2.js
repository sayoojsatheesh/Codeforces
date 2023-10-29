let n = 3;
let teams = [
  [1, 2],
  [2, 1],
  [1, 3],
];
let count = [];
let pointer = 0;
while (pointer < n) {
  let home = n - 1;
  let away = 0;
  for (let i = 0; i < n; i++) {
    if (pointer == i) {
      continue;
    } else {
      if (teams[pointer][1] == teams[i][0]) {
        home++;
      } else {
        away++;
      }
    }
  }
 console.log(`${home} ${away}`)
  pointer++;
}
