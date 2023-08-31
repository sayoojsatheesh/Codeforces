let n = 3;
let printSet;
if (n == 1 || n == 3) {
  console.log(-1);
  return;
} else {
  printSet = [];
  for (let i = n; i > 0; i--) {
    printSet.push(i);
  }
}
console.log(printSet);
