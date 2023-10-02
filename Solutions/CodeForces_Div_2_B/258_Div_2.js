let n = 2;
let array = [58, 4];
let sortedArray = [...array].sort(function (a, b) {
  return a - b;
});
if (JSON.stringify(sortedArray) === JSON.stringify(array)) {
  console.log("yes");
  console.log("1 1");
  return;
}

let start;
let end;
for (let i = 0; i < array.length; i++) {
  if (sortedArray[i] !== array[i]) {
    start = i;
    break;
  }
}

for (let i = array.length - 1; i >= 0; i--) {
  if (sortedArray[i] !== array[i]) {
    end = i;
    break;
  }
}
let endValue = end;
for (let j = start; j <= end; j++) {
  let temp = array[j];
  array[j] = array[end];
  array[end] = temp;
  end--;
}
if (JSON.stringify(sortedArray) === JSON.stringify(array)) {
  console.log("yes");
  console.log(`${start} ${endValue}`);
} else {
  console.log("no");
}
