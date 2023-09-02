let n = 2;
let x = 3;
let interstigMoments = [
  [5, 6],
  [10, 12],
];
let playerCurrentlyAt = 1;
let pointer = 0;
let totalWatchTime = 1;
while (playerCurrentlyAt < interstigMoments[interstigMoments.length - 1][1]) {
  let maxSkippable = interstigMoments[pointer][0];
  let timeAfterSkipping = playerCurrentlyAt + x;
  if (timeAfterSkipping <= maxSkippable) {
    playerCurrentlyAt = playerCurrentlyAt + x;
  } else {
    if (pointer !== interstigMoments.length - 1) {
      let watching = interstigMoments[pointer][1] - playerCurrentlyAt + 1;
      totalWatchTime = totalWatchTime + watching;
      playerCurrentlyAt = interstigMoments[pointer][1] + 1;
    } else {
      let watching = interstigMoments[pointer][1] - playerCurrentlyAt;
      totalWatchTime = totalWatchTime + watching;
      playerCurrentlyAt = interstigMoments[pointer][1];
    }
  }
  if (playerCurrentlyAt >= interstigMoments[pointer][1]) {
    pointer++;
  }
}
console.log(totalWatchTime)
