let stringArray = ["a", "b", "c"];
let k = 3;
const numberArray = [
  1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];
let largest;
let indexValue;
numberArray.map((item, index) => {
  if (index == 0) {
    largest = item;
    indexValue = index;
  }
  if (item > largest) {
    largest = item;
    indexValue = index;
  }
});
let total = 0;
for (let i = 0; i < stringArray.length; i++) {
  const character = stringArray[i]; // Change this to the character you want to find the ASCII value of
  const asciiValue = numberArray[character.charCodeAt(0) - 97];
  total = total + (i + 1) * asciiValue;
}
let starting = stringArray.length + 1;
while (starting <= k + stringArray.length) {
  total = total + starting * largest;
  starting++;
}
console.log(total);
