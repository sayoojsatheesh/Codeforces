let n = 4;
let array = [-1, -2, -3, 0];
let set1 = [];
let set2 = [];
let set3 = [];
for (let i = 0; i < n; i++) {
  if (array[i] < 0) {
    set1.push(array[i]);
  } else if (array[i] == 0) {
    set3.push(array[i]);
  } else {
    set2.push(array[i]);
  }
}
if (set2.length == 0) {
  set2.push(set1[set1.length - 1]);
  set2.push(set1[set1.length - 2]);
  set1.pop();
  set1.pop();
}
if (set1.length % 2 == 0) {
  set3.push(set1[set1.length - 1]);
  set1.pop();
}
console.log(set1.length, ...set1);
console.log(set2.length, ...set2);
console.log(set3.length, ...set3);
