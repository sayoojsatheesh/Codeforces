let k = 3;
let l = 27;
let count = 0;
while (l >= k) {
  count++;
  l = l / k;
  if (l == 1) {
    console.log("YES");
    console.log(count-1);
    return;
  }
}
console.log("NO")
