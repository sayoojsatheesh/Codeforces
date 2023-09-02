let n = 8;
let cordinatePoints = [
  [1, 1],
  [4, 2],
  [3, 1],
  [1, 2],
  [0, 2],
  [0, 1],
  [1, 0],
  [1, 3],
];
let pointer = 0;
let left = false;
let right = false;
let up = false;
let down = false;
let printCount = 0;
while (pointer < n) {
  for (let i = 0; i < n; i++) {
    if (pointer !== i) {
      if (
        cordinatePoints[pointer][0] > cordinatePoints[i][0] &&
        cordinatePoints[pointer][1] == cordinatePoints[i][1]
      ) {
        right = true;
      } else if (
        cordinatePoints[pointer][0] < cordinatePoints[i][0] &&
        cordinatePoints[pointer][1] == cordinatePoints[i][1]
      ) {
        left = true;
      } else if (
        cordinatePoints[pointer][0] == cordinatePoints[i][0] &&
        cordinatePoints[pointer][1] < cordinatePoints[i][1]
      ) {
        down = true;
      } else if (
        cordinatePoints[pointer][0] == cordinatePoints[i][0] &&
        cordinatePoints[pointer][1] > cordinatePoints[i][1]
      ) {
        up = true;
      }
    }
  }
  if (right && left && up && down) {
    printCount++;
  }
  pointer++;
  left = false;
  right = false;
  up = false;
  down = false;
}
console.log(printCount)
