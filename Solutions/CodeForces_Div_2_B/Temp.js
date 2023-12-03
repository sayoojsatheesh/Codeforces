function compareSquares(valueArray, squareArray) {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  /// frequncy of 1//
  for (let i = 0; i < valueArray.length; i++) {
    frequencyCounter1[valueArray[i]] = frequencyCounter1[valueArray[i]]
      ? frequencyCounter1[valueArray[i]]++
      : 1;
  }
  // frequcy of 2//
  for (let i = 0; i < squareArray.length; i++) {
    frequencyCounter2[squareArray[i]] = frequencyCounter2[squareArray[i]]
      ? ++frequencyCounter2[squareArray[i]]
      : 1;
  }
  // compare the 2//
  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key * key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
console.log(compareSquares([1, 2, 3], [1, 9, 4]));
console.log(compareSquares([1, 2, 3], [1, 9]));
console.log(compareSquares([1, 2, 1], [1, 4, 4]));
