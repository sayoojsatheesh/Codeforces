let n = 1000000000;
let m = 32170;
let maxCount = n - (m - 1);
console.log(maxCount)
let maxFriends = sumOfIntegersUpToN(maxCount)
let minGroup = Math.floor(n / m);
let reminder = n - minGroup * m;
let friendsCount = 0;
for (let i = 0; i < m - reminder; i++) {
  let count = (minGroup * minGroup - minGroup) / 2;
  friendsCount = friendsCount + count;
}
for (let i = 0; i < reminder; i++) {
  let count = ((minGroup + 1) * (minGroup + 1) - (minGroup + 1)) / 2;
  friendsCount = friendsCount + count;
}
let print = Math.ceil(friendsCount) + " " + maxFriends;
function sumOfIntegersUpToN(n) {
  if (n < 1) {
    return "Input should be a positive integer.";
  } else {
    return ((n - 1n) * n) / 2n;
  }
}
console.log(print);
