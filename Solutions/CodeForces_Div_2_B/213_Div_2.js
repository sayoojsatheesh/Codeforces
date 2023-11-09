let n = 51;
let array = [
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0
];
let startPosition = 0;
let all = array.every((item) => {
  return item == array[0];
});
if (all) {
  console.log(2);
  return;
}
let maxLength;
while (startPosition <= n - 2) {
  let tempArray = [];

  for (let i = startPosition; i <= n - 2; i++) {
    if (array[i] + array[i + 1] == array[i + 2]) {
      tempArray.push(array[i]);
    } else {
      break;
    }
  }
  if (!maxLength) {
    maxLength = tempArray.length + 2;
  } else {
    if (tempArray.length + 2 > maxLength) {
      maxLength = tempArray.length + 2;
    }
  }
  startPosition++;
}
console.log(maxLength);
