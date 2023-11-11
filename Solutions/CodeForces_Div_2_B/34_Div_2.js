let n = 5;
let m = 3;
let tvs = [-2, -2, -2, -2, -2].sort(function (a, b) {
  return a - b;
});
let filterd = tvs.filter((item) => item < 0);
let total = filterd.reduce((total, item, index) => {
    console.log(total,item,index)
  if (index < m ) {
    return (total = total + item);
  } else {
    return total;
  }
}, 0);
console.log(Math.abs(total));
