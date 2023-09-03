let n = 3;
let k = 2;
let numbers = [[447], [44], [77]];
let pointer = 0;
let printCount = 0;
while (pointer < n) {
  let count = 0;
  for (let i = 0; i < numbers[pointer].toString().length; i++) {
    if (
      numbers[pointer].toString()[i] == 4 ||
      numbers[pointer].toString()[i] == 7
    ) {
      count++;
    }
  }

  if (count <= k) {
    printCount++;
  }
  pointer++;
}
console.log(printCount)
