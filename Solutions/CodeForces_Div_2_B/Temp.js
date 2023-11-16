function mergeSort(array) {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let leftSide = array.slice(0, mid);
  let rightSide = array.slice(mid);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
}

// Example usage:
const array = [2, 7, 8, 9, 4, 5, 9, 7, 8, 99, 105];
const sortedArray = mergeSort(array);
console.log(sortedArray);
