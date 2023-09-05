let n = 3;
let m = 3;
let array = [
  [2, 2, 3],
  [2, 3, 2],
  [1, 1, 2],
];
let count = 0;
let pointer = 0;
let marked = [];
while (pointer < m) {
  let temp = [];
  for (let i = 0; i < n; i++) {
    temp.push(array[i][pointer]);
  }
  let best = temp.sort(function (a, b) {
    return a - b;
  })[temp.length - 1];
  for (let j = 0; j < temp.length; j++) {
    if (temp[j] == best) {
      let exit = marked.find((item) => item == j + 1);
      if (!exit) {
        marked.push(j + 1);
      }
    }
  }
  pointer++;
}
console.log(marked.length);
