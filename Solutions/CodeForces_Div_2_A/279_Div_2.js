let n = 5;
let t = [1,3,2,2,1];
let t1 = [];
let t2 = [];
let t3 = [];
for (let i = 0; i < n; i++) {
  if (t[i] === 1) {
    t1.push({ value: 1, index: i + 1 });
  } else if (t[i] === 2) {
    t2.push({ value: 2, index: i + 1 });
  } else {
    t3.push({ value: 3, index: i + 1 });
  }
}
let count = 0;
let print = "";
for (let i = 0; i < n; i++) {
  if (t1[i] && t2[i] && t3[i]) {
    count++;
    print = print + `${t1[i].index} ${t2[i].index} ${t3[i].index} \n`;
  } else {
    break;
  }
}
console.log(count);
console.log(print);
