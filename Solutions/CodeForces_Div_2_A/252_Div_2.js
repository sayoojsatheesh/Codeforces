let n = 3;
let k = 50000;
let n1 = [1, 40000];
let n2 = [2, 20000, 60000];
let n3 = [3, 10000, 70000, 190000];
let list = [n1, n2, n3];
let sortedList = [];
let count = 0;
for (let i = 0; i < n; i++) {
  let flag = false;
  const total = list[i].slice(1).reduce((total, item, index) => {
    if (item < k) {
      flag = true;
    }
    return total + item;
  }, 0);
  if (flag) {
    count++;
    sortedList.push({ total, index: list[i][0] });
  }
  
}


let order = "";
sortedList.map((item) => {
  order = order + `${item.index} `;
});
console.log(count);
if (count) {
  console.log(order);
}
