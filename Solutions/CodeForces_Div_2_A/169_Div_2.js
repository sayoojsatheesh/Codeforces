let n = 2;
let k = 5;
let all = [
  [3, 3],
  [4, 5],
];
let largest = 0;
let happy = 0;
for (let i = 0; i < n; i++) {

  if (all[i][1] > k) {
    happy = all[i][0] - (all[i][1] - k);
  } else {
    happy = all[i][0];
  }
  if (i == 0) {
    largest = happy;
  }
  if (happy > largest) {
    largest = happy;
  }
}
console.log(largest);
