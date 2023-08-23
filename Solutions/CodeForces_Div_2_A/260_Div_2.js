let n = 3;
let print = "Poor Alex";
let laptops = [
  [2, 3],
  [1, 1],
  [3, 2],
];
let bestIndex;
for (let i = 0; i < n; i++) {
  if (i == 0) {
    bestIndex = i;
  }
  if (i < n - 1) {
    if (
      laptops[bestIndex][0] < laptops[i+1][0] &&
      laptops[bestIndex][1] > laptops[i+1][1]
    ) {
        
        bestIndex=i;
      print = "Happy Alex";
    }
  }
}
console.log(print);
