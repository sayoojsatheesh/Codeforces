let n = 4;
let m = 1;
let not = [1, 3];
let unqiue;
for (let i = 1; i <= n; i++) {
  let find = not.find((item) => item === i);
  if (!find) {
    unqiue = i;
    break;
  }
}
for (let j = 1; j <= n; j++) {
  if (j % 2 !== 0) {
    if (j !== unqiue) console.log(`${j} ${unqiue}`);
  } else {
    if (j !== unqiue) console.log(`${unqiue} ${j}`);
  }
}
