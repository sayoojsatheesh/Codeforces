let n = 7;
let m = 3;
let k = 1;
let soliders = [8, 17, 111, 17];
let binnary = [];
for (let i = 0; i <= m; i++) {
  binnary.push(soliders[i].toString(2));
}
console.log(binnary);
let friends = 0;
let pointer = m;

for (let i = 0; i < binnary.length - 1; i++) {
  let count = 0;
  for (let j = 0; j < binnary[i].length; j++) {
    console.log("bt =",binnary[i] ^ binnary[pointer]);
    if (binnary[i][j] !== binnary[pointer][j]) {
      count++;
    }
  }
  count = count + Math.abs(binnary[i].length - binnary[pointer].length);
  console.log(count);
  if (count <= k) {
    friends++;
  }
}

console.log(friends);
