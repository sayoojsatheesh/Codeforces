let days = 2;
let sumTime = 5;
let sc = [
  [0, 1],
  [3, 5],
];

if (days == 1) {
  if (sc[0][0] <= sumTime && sumTime <= sc[0][1]) {
    console.log("YES");
    console.log(sumTime);
    return;
  } else {
    console.log("NO");
    return;
  }
}
let total = 0;

for (let i = 0; i < days; i++) {
  total = total + sc[i][1];
}
let reminder = total - sumTime;

if (reminder < 0) {
  console.log("NO");
} else if (reminder == 0) {
  console.log("YES");
  for (let i = 0; i < days; i++) {
    console.log(sc[i][1]);
  }
} else {
  for (let i = 0; i < days; i++) {
    let tempValue = sc[i][1] - reminder;
    if (sc[i][0] <= tempValue) {
      sc[i][1] = tempValue;
      reminder = 0;
      break;
    } else {
      let temp = sc[i][1] - sc[i][0];
      sc[i][1] = sc[i][0];
      reminder = reminder - temp;
    }
  }
  if (reminder !== 0) {
    console.log("NO");
    return;
  }
  console.log("YES");
  for (let i = 0; i < days; i++) {
    console.log(sc[i][1]);
  }
}
