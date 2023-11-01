let n = 10;
let dCount = 5;
let dirty = [2, 4, 8, 3, 6];

let sorted = dirty.sort();
for (let i = 0; i < n; i++) {
  if (sorted[i] + 1 == sorted[i + 1] && sorted[i] + 2 == sorted[i + 2]) {
    console.log("NO");
    return;
  }
}
let lastOrFirst = dirty.some((item) => {
  return item == 1 || item == n;
});
if (lastOrFirst) {
  console.log("NO");
  return;
}
console.log("YES");
