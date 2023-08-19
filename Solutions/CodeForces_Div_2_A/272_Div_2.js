let n = 10000;
let m = 2;
if (n < m) {
  console.log(-1);
  return;
} else {
  let allPos = [];
  for (let i = 1; i <= Math.floor(n / m); i++) {
    allPos.push(i * m);
  }
  let half = n / 2;
  let num = allPos.find((item) => {
    if (item >= half) {
      return item;
    }
  });
  console.log(num);
}
