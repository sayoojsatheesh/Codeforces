let stones = "BRRBGBRGRBGRGRRGGBGBGBRGBRGRGGGRBRRRBRBBBGRRRGGBBB";
let instructions = "BBRBGGRGRGBBBRBGRBRBBBBRBRRRBGBBGBBRRBBGGRBRRBRGRB";
let stonePointer = 0;
let instructionsPointer = 0;
while (instructionsPointer < instructions.length) {
  if (instructions[instructionsPointer] == stones[stonePointer]) {
    stonePointer++;
  }
  instructionsPointer++;
}
console.log(stonePointer+1);
