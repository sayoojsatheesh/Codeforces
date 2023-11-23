let totalPaintings = 4;
let totalPainters = 2;
let timeTaken = [
  [2, 5],
  [3, 1],
  [5, 3],
  [10, 1],
];
let timeCountArray = "";
if (totalPainters == 1) {
  let timeCount = 0;
  for (let j = 0; j < timeTaken.length; j++) {
    timeCount = parseInt(timeCount) + parseInt(timeTaken[j]);
    console.log(timeCount);
  }
} else {
  let timeCount = 0;
  let reminder = 0;
  for (let j = 0; j < timeTaken.length; j++) {
    if (j == 0) {
      timeCount = timeCount + timeTaken[j][0] + timeTaken[j][1];
      timeCountArray = timeCountArray + " " + timeCount;
    } else {
      if (timeTaken[j - 1][1] > timeTaken[j][0]) {
        reminder = reminder + (timeTaken[j - 1][1] - timeTaken[j][0]);
        timeCount = timeCount + timeTaken[j][1];
        timeCountArray = timeCountArray + " " + timeCount;
      } else {
        reminder = reminder + timeTaken[j - 1][1];
        let tempTime = timeTaken[j][0] - reminder + timeTaken[j][1];
        if (reminder > timeTaken[j][0]) {
          reminder = Math.abs(reminder - timeTaken[j][0]);
        } else {
          reminder = 0;
        }

        timeCount = timeCount + tempTime;
        timeCountArray = timeCountArray + " " + timeCount;
      }
    }
  }
}

console.log(timeCountArray)
