let x1 = 100;
let y1 = -100;
let x2 = -100;
let y2 = -100;

let x3;
let y3;
let x4;
let y4;
if (x1 != x2 && y1 != y2 && Math.abs(x1 - x2) != Math.abs(y1 - y2)) {
  console.log(-1);
  return;
} else if (x1 == x2) {
  let length = Math.abs(y2 - y1);
  y3 = y1;
  y4 = y2;
  x3 = x1 + length;
  x4 = x2 + length;
  console.log(x3, y3, x4, y4);
} else if (y1 == y2) {
  x3 = x1;
  x4 = x2;
  let length = Math.abs(x1 - x2);
  y3 = y1 + length;
  y4 = y2 + length;
  console.log(x3, y3, x4, y4);
} else {
  console.log(x1, y2, x2, y1);
}
