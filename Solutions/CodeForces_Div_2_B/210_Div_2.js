let n = 10;
let k = 9;
if (k == 0 && n == 1) {
  console.log(1);
  return;
}
if (n == 1 || n == k) {
  console.log(-1);
  return;
}
let permutaionArray = "";
let left;

if (k == n - 1) permutaionArray = '1';

for (let i = 2; i <= n; i++) {
  if (k > 0) {
    permutaionArray = permutaionArray + " " + i;
    k--;
  } else {
    if (!left) left = i;
    if (i !== n) {
      permutaionArray = permutaionArray + " " + i + 1;
    } else {
      permutaionArray = permutaionArray + " " + 1;
      permutaionArray = left +" "+ permutaionArray;
    }
  }
}

console.log(permutaionArray);
