let n = 3;
let laptops = [
  [45, 45],
  [52, 52],
  [35, 35],
];
let print = "Poor Alex";
let laptopsNew = laptops.sort((a, b) => {
  if (a[0] < b[0]) {
    return -1;
  }

  if (a[0] > b[0]) {
    return 1;
  }

  if (a[1] < b[1]) {
    return -1;
  }

  if (a[1] > b[1]) {
    return 1;
  }

  return 0;
});


for (let i = 0; i < n; i++) {
  if (i !== n - 1) {
    if (
      laptopsNew[i] < laptopsNew[i + 1] &&
      laptopsNew[i] > laptopsNew[i + 1]
    ) {
      console.log(laptopsNew[i].charAt(0), laptopsNew[i + 1].charAt(0));
      console.log(laptopsNew[i].charAt(1), laptopsNew[i + 1].charAt(1));
      print = "Happy Alex";
      break;
    }
  }
}
console.log(print);
