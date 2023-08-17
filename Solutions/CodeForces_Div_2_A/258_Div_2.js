let n1 = 2;
let n2 = 1;
let largest;
if (n1 < n2) {
  largest = n2;
} else {
  largest = n1;
}
let intersection = n1 * n2;
if ((intersection/largest) % 2 == 0) {
  console.log("Malvika");
} else {
  console.log("Akshat");
}
