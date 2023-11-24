let numberOfSections = 8;
let sections = [1, 2, 1, 1, 1, 3, 3, 4];

let maxValue = 0;
if (numberOfSections == 1) {
  console.log(1);
  return;
}
for (let i = 0; i < numberOfSections; i++) {
  let rightCount = lookRight(i);
  let leftCount = lookLeft(i);
  let total = rightCount + leftCount + 1;
  maxValue = Math.max(maxValue, total);
}

console.log(maxValue);

function lookRight(start) {
  if (start == sections.length - 1) return 0;

  let counter = 0;
  for (let i = start; i < numberOfSections; i++) {
    if (sections[i + 1] <= sections[i]) {
      counter++;
    } else {
      return counter;
    }
  }
}

function lookLeft(start) {
  if (start == 0) {
    return 0;
  }
  let counter = 0;
  for (let i = start; i >= 0; i--) {
    if (sections[i - 1] <= sections[i]) {
      counter++;
    } else {
      return counter;
    }
  }
}
