let sequnceCount = 8;
let sequnce = [1, 2, 1, 3, 1, 2, 1, 5];
let records = {};
if (sequnceCount == 1) {
  console.log(1);
  console.log(`${sequnce[0]} 0`);
  return;
}
for (let i = 0; i < sequnceCount; i++) {
  if (!records[sequnce[i]]) {
    records[sequnce[i]] = { currentIndex: i + 1 };
    records[sequnce[i]].show = true;
  } else {
    if (!records[sequnce[i]].lastIndex) {
      records[sequnce[i]].lastIndex = i + 1 - records[sequnce[i]].currentIndex;
      records[sequnce[i]].currentIndex = i + 1;
    } else {
      let tempDiffrence = i + 1 - records[sequnce[i]].currentIndex;
      if (records[sequnce[i]].lastIndex !== tempDiffrence) {
        records[sequnce[i]].show = false;
      } else {
        records[sequnce[i]].currentIndex = i + 1;
      }
    }
  }
}
let totatItems = 0;
let printString = ``;
for (let key in records) {
  if (records[key].show) {
    totatItems++;
    printString =
      printString +
      `${key} ${records[key].lastIndex ? records[key].lastIndex : 0}` +
      "\n";
  }
}
console.log(totatItems);
console.log(printString);

