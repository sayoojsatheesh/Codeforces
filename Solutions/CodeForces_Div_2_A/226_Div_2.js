let n = 5;
let b = 1;
let days = [5, 10, 7, 3, 20];
let moneyEarned = 0;
for (let i = 0; i < n; i++) {
  if (days[i] - days[i + 1] > moneyEarned) {
    moneyEarned = days[i] - days[i + 1];
  }
}
console.log(moneyEarned -b)
