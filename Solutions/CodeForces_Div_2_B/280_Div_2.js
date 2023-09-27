let n = 2;
let l = 5;
let street = [2, 5];
let start = false;
let end = false;
let addedStart = 0;
let addedEnd = 0;
for (let j = 0; j < street.length; j++) {
  if (0 == street[j]) {
    start = true;
  } else if (l == street[j]) {
    end = true;
  }
}

if (!start && !end) {
  street.unshift(0);
  street.push(l);
} else if (!start) {
  street.unshift(0);
} else if (!end) {
  street.push(l);
}
let sorted = street.sort(function (a, b) {
  return a - b;
});
let startLength;
let endLength;
if (!start) {
  startLength = sorted[1] - sorted[0];
}
if (!end) {
  endLength = sorted[sorted.length - 1] - sorted[sorted.length - 2];
}
let length = 0;
for (let i = 0; i < sorted.length; i++) {
  if (i == 0) {
    length = sorted[i + 1] - sorted[i];
  } else {
    let tempLength = sorted[i + 1] - sorted[i];
    if (tempLength > length) {
      length = tempLength;
    }
  }
}
let addedLength;
if (startLength && endLength) {
  addedLength = startLength > endLength ? startLength : endLength;
} else if (startLength) {
  addedLength = startLength;
} else {
  addedLength = endLength;
}
if (addedLength) {
  console.log(addedLength);
} else {
  console.log(length / 2);
}
