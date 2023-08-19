let s = 2;
let n = 5;
let d1 = [5, 1];
let d2 = [2, 1];
let d3 = [3, 1];
let d4 = [1, 1];
let d5 = [4, 1];
let temp = [d1, d2, d3, d4, d5];
let beatable = [];
let unbeatable = [];
let hihgestPowerBoost;
let leastPowerfull;
let leastPowerfullTemp;
for (let j = 0; j < n; j++) {
  if (temp[j][0] < s) {
    if (!hihgestPowerBoost) {
      hihgestPowerBoost = temp[j][1];
      leastPowerfull = temp[j][0];
      beatable.push(temp[j]);
    } else {
      if (hihgestPowerBoost <= temp[j][1]) {
        hihgestPowerBoost = temp[j][1];
        if (temp[j][0] < leastPowerfull) {
          beatable.unshift(temp[j]);
        } else {
          beatable.push(temp[j]);
        }
      }
    }
  } else {
    unbeatable.push(temp[j]);
  }
}
let beatableSorted = beatable.sort((a, b) => {
   return a[0] - b[0];
});
let unbeatableSorted = unbeatable.sort((a, b) => {
    return a[0] - b[0];
  });
let rounds = [...beatableSorted, ...unbeatableSorted];

let flag = "YES";
for (let i = 0; i < n; i++) {
  if (rounds[i][0] < s) {
    s = s + rounds[i][1];
  } else {
    flag = "NO";
    break;
  }
}
console.log(flag);
