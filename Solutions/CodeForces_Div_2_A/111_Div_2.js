let n = 3;
let nums = [1,1,1,9];
let totalSum = nums.reduce((sum, itme) => {
  sum = sum + itme;
  return sum;
}, 0);
let sortedArray = nums.sort();
let i = sortedArray.length - 1;
let currentSum = 0;
let count = 0;
while (i >= 0) {
  count++;
  currentSum = currentSum + sortedArray[i];
  if (totalSum / 2 + 1 < currentSum) {
    console.log(count);
    return;
  }
  i--;
}
