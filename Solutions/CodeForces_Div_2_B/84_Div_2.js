let tempString = "abcd";
let n = 5;
let stringPointer = 0;
let luckyString = "";
for (let i = 0; i < n; i++) {
  luckyString = luckyString + tempString[stringPointer];
  if (stringPointer == 3) {
    stringPointer = 0;
    continue;
  }
  stringPointer++;
}

console.log(luckyString);
