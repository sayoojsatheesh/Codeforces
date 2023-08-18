let count = 2;
let dressCode = [
  [1,2],
  [1,2],
];
let matchCount = 0;
for (let i = 0; i < count; i++) {
  for (let j = 0; j < count; j++) {
    if (i !== j) {
      if (dressCode[i][1] == dressCode[j][0]) {
        matchCount++;
      }
    }
  }
}
console.log(matchCount)