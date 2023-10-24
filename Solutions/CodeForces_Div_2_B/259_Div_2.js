let numberArray = [1, 3, 2];
let copy = [1, 3, 2];
let sortedArray = numberArray.sort(function (a, b) {
  return a - b;
});
let pointer = numberArray.length - 1;
let count = 0;
while (pointer >= 0) {
  if (copy[0] >= copy[numberArray.length - 1]) {
    console.log(-1);
    return;
  }
  copy.unshift(copy[numberArray.length - 1]);
  copy.pop();
  pointer--;
  count++;
  if (JSON.stringify(sortedArray) === JSON.stringify(copy)) {
    console.log(count);
    return;
  }
}
console.log(-1);
