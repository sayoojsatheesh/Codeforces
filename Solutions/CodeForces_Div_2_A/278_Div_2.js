let n = 18;
let count = 0;
let flag = true;
if(n.toString().includes(8)){
    count++;
    n++;
}
while (flag) {
  if (n.toString().includes(8)) {
    if(count)
    flag = false;
  } else {
    count++;
    n++;
  }
}
console.log(count);
