let n = 6;
let k = 4;
let teamMembers = [0, 1, 2, 3, 4, 5];
let value = 5 - k;
let count = 0;
for (let i = 0; i <= n; i++) {
  if (teamMembers[i] <= value) {
    count++;
  }
}
console.log(Math.floor(count/3))
