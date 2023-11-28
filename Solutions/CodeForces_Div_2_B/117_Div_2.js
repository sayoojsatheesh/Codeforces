let d = 31;
let n = 12;
let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let manualCount = 0;
for (let i = 0; i < n - 1; i++) {
  manualCount += d - days[i];
}
console.log(manualCount)
