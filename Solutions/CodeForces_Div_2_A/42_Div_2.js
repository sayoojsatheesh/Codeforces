let n = 5;
let array = ["A", "ABA", "ABA", "A", "A"];
if (n == 1) {
  console.log(array[0]);
  return;
}
let count = {};
for (let i = 0; i < array.length; i++) {
  count[array[i]] = count[array[i]] !== undefined ? ++count[array[i]] : 1;
}
let largest;
let tempKey;
for (let key in count) {
  if (!largest) {
    largest = count[key];
    tempKey = key;
    continue;
  }

  if (largest > count[key]) {
    console.log(tempKey);
  } else {
    console.log(key);
  }
}
