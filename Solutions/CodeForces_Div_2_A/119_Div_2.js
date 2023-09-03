let n = 5;
let a = 5;
let b = 3;
let c = 2;
let max = 0;
for (let i = 0; i < a / 2; i++) {
  for (let j = 0; j < b / 2; j++) {
    for (let k = 0; k < c / 2; k++) {
      let val = n - a * i + b * j + c * k;
      if (val == 0) {
        max = Math.max(max, i + j + k);
      }
    }
  }
}
console.log(max)
