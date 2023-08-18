let n = 4;
let m = 25;
let puzzle = [
  226, 790, 628, 528, 114, 64, 239, 279, 619, 39, 894, 763, 763, 847, 525, 93,
  882, 697, 999, 643, 650, 244, 159, 884, 190,
];
let largest = Math.max(...puzzle);
let frequencyCounter = new Array(largest + 1).fill(0);
let sortedArray = [];
for (let i = 0; i < m; i++) {
  frequencyCounter[puzzle[i]]++;
}
for (let i = 0; i < frequencyCounter.length; i++) {
  while (frequencyCounter[i] > 0) {
    frequencyCounter[i]--;
    sortedArray.push(i);
  }
}
console.log(sortedArray);
let minimumDiffrens = sortedArray[m - 1] - sortedArray[0];
for (let i = 0; i < sortedArray.length; i++) {
  let smallest = sortedArray[i];
  let largest = sortedArray[i + (n - 1)];
  let diffrnc = largest - smallest;
  if (diffrnc < minimumDiffrens) {
    minimumDiffrens = diffrnc;
  }
}

console.log(minimumDiffrens);
