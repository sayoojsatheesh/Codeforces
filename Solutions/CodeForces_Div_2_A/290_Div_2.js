let r = 9;
let c = 9;
let snakePattern = "";
let direction;
let directionShifter = true;
for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= c; j++) {
    if (i == 1) {
      snakePattern = snakePattern + "# ";
      if (j == c) {
        direction = "right";
      }
    } else if (i == r) {
      snakePattern = snakePattern + "# ";
    } else {
      if (direction == "right") {
        if (j !== c) {
          snakePattern = snakePattern + ". ";
        } else {
          snakePattern = snakePattern + "#";
          direction = "full";
        }
      } else if (direction == "full") {
        snakePattern = snakePattern + "# ";
        if (j == c) {
          direction = directionShifter ? "left" : "right";
          directionShifter = !directionShifter;
        }
      } else if (direction == "left") {
        if (j == 1) {
          snakePattern = snakePattern + "# ";
        } else {
          snakePattern = snakePattern + ". ";
          if (j == c) {
            direction = "full";
          }
        }
      }
    }
  }
  snakePattern = snakePattern + "\n";
}

console.log(snakePattern);
