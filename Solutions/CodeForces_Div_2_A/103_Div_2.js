let n = 2 - 1;
let nums = [100,99];

if (n <= 1) {
  if (nums[0] < nums[1] ) {
    console.log(1);
  }else{
    console.log(0)
  }
} else {
  let largeValue = nums[0];
  let smallValue = nums[n];
  let largeIndex = 0;
  let smallIndex = n;

  for (let i = 0; i <= n; i++) {
    if (nums[i] > largeValue) {
      largeValue = nums[i];
      largeIndex = i;
    }
    if (nums[i] <= smallValue) {
      smallValue = nums[i];
      smallIndex = i;
    }
  }

  if (largeIndex > smallIndex) {
    smallIndex = smallIndex + 1;
  }

  let totalTime = Math.abs(0 - largeIndex) + Math.abs(n - smallIndex);
  console.log(totalTime);
}
