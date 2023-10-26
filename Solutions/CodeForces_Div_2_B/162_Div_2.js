let n = 5;
let trees = [2, 1, 2, 1, 1];
let time = 0;
let treesPointer = 0;
time = time + trees[treesPointer] + 1;
while (treesPointer < n - 1) {
  if (trees[treesPointer + 1] > trees[treesPointer]) {
    let climpTime = trees[treesPointer + 1] - trees[treesPointer];
    time = time + climpTime + 2; // 2 because 1 for jump and 1 for eat //
  } else {
    let climpDown = trees[treesPointer] - trees[treesPointer + 1];
    time = time + climpDown + 2;
  }
  treesPointer++;
}
console.log(time);
