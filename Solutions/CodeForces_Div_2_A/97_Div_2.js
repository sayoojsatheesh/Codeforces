let n = 4;
let nums = [2, 3, 4, 1];
let giftPostion = [];
for (let i = 0; i < n; i++) {
  giftPostion[nums[i] - 1] = i + 1;
}
console.log(giftPostion);
