let pCount = 2;
let qCount = 3;
let l = 0;
let r = 20;
let p = [
  [15, 17],
  [23, 26],
];
let q = [
  [1, 4],
  [7, 11],
  [15, 17],
];
let count = 0;
while (l <= r) {
  let flag = false;
  for (let j = 0; j < qCount; j++) {
    for (let i = 0; i < pCount; i++) {
      if (
        p[i][0] <= q[j][0] + l <= p[i][1] &&
        p[i][0] <= q[j][1] + l <= p[i][1]
      ) {
        console.log(l);
        flag = true;
        break;
      }
    }
  }
  if (flag) {
    count++;
  }
  l++;
}
console.log(count);
