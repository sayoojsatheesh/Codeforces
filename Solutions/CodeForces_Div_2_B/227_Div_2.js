let n = 3;
let m = 5;
let good = [1, 2, 3];
let total = [1, 1, 1, 1, 1];
let pointer = 0;
let count = 0;
while (pointer < n) {
  let flag = false;
  for (let i = 0; i < m; i++) {
    if (good[pointer] == total[i]) {
      flag = true;
      total[i] = "X";
      break;
    }
  }
  if (flag) {
    count++;
  }
  pointer++;
}

console.log(n-count);
