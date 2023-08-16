let n = '5';
let nums = ['4','2','2','2','2'];
let totalSum = nums.reduce((sum, item) => {
  sum = sum + parseInt(item);
  return sum;
}, 0);
let sortedArray = nums.sort(function(a, b) {
  return a - b;
});
let i = parseInt(n) -1;
let currentSum = 0;
let count = 0;
while (i >= 0) {
  count++;
  currentSum = parseInt(currentSum) + parseInt(sortedArray[i]);
  if (parseInt(totalSum / 2)  < currentSum) {
    console.log(count);
    return;
  }
  i--;
}
