let n = 4;
let numbers = [1, 2, 1, 1];
let even = [];
let odd = [];
for (let i = 0; i < n; i++) {
  if (numbers[i] % 2 == 0) {
    even.push(i + 1);
  } else {
    odd.push(i + 1);
  }
}
if (even.length == 1) {
  console.log(even[0]);
} else {
  console.log(odd[0]);
}
