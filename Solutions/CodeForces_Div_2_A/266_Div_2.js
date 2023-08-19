let n = 100;
let m = 8;
let a = 10;
let b = 1;
let minimumValue = 0;
if (n < m) {
  let tempValue = b;
  let tempValu2 = n * a;
  minimumValue = tempValue < tempValu2 ? tempValue : tempValu2;
} else {
  if (n % m == 0) {
    let mTimes = n / m;
    let tempValue = (minimumValue = mTimes * b);
    let tempValu2 = n * a;
    minimumValue = tempValue < tempValu2 ? tempValue : tempValu2;
  } else {
    let reminder = n % m;
    let mTimes = Math.floor(n / m);
    let tempValue;
    if (a < b) {
      tempValue = minimumValue = mTimes * b + reminder * a;
    } else {
      tempValue = minimumValue = mTimes * b +  b;
    }

    let tempValu2 = n * a;
    minimumValue = tempValue < tempValu2 ? tempValue : tempValu2;
  }
}

console.log(minimumValue);
