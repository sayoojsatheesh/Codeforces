let n = 3;
let x = [3, -1, 7];
let y = [-5, 2, -4];
let z = [2, -1, -3];
let array = [x, y, z];
let x1 = 0;
let y1 = 0;
let z1 = 0;
for (let i = 0; i < n; i++) {
  x1 += array[i][0];
  y1 += array[i][1];
  z1 += array[i][2];
}
if (x1 == 0 && y1 == 0 && z1 == 0) {
  console.log("YES");
} else {
  console.log("NO");
}
