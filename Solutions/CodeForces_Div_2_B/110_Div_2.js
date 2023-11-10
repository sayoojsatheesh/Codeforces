let n = 3;
let total = 0;
let circles = [1, 4, 2].sort(function (a, b) {
  return b - a;
});
let last;
if (n % 2 !== 0) {
  last = circles.pop();
  total=total+Math.PI*last
  n = n - 1;
}

if (n == 1) {
  console.log(3.14 * 1);
} else {
  for (let i = 0; i < n; i += 2) {
    total =
      total +
      3.14159265358979323846 *
        (circles[i] * circles[i] - circles[i + 1] * circles[i + 1]);
  }
}

console.log(total);
