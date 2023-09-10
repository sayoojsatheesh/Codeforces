let n = 5;
let array = [45, 12, 27, 30, 18];
while (true) {
 
  arr.sort((a, b) => b - a);
  const largest = arr[0];
  const secondLargest = arr[1];

  if (secondLargest === 0) {
    break;
  }

  arr[0] -= secondLargest;

}
const minimalSum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(minimalSum);
