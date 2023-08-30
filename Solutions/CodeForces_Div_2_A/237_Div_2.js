let n = 5;
let square = [
  ['l', 'i', 'i', 'i', 'l'],
  ['i', 'l', 'i', 'l', 'i'],
  ['i', 'i', 'l', 'i', 'i'],
  ['i', 'l', 'i', 'l', 'i'],
  ['l', 'i', 'i', 'i', 'l']
];
let countLeft = 0;
let countRight = n - 1;
let alphabetInDiagonal;
let diagonalChecked;
let lettersOnOtherSquare = square[0][1];
for (let i = 0; i < n; i++) {
  diagonalChecked = "UnCheked";
  for (let j = 0; j < n; j++) {
    if (
      square[i][countLeft] == square[i][countRight] &&
      diagonalChecked == "UnCheked"
    ) {
      if (alphabetInDiagonal) {
        if (
          square[i][countLeft] !== alphabetInDiagonal ||
          square[i][countRight] !== alphabetInDiagonal
        ) {
          console.log("NO");
          return;
        }
      }
      alphabetInDiagonal = square[i][countLeft];
      diagonalChecked = "Cheked";
    } else if (
      diagonalChecked == "UnCheked" &&
      square[i][countLeft] !== square[i][countRight]
    ) {
      diagonalChecked = "NotEqual";
    }
    if (j !== countLeft && j !== countRight) {
      if (lettersOnOtherSquare) {
        if (
          square[i][j] == alphabetInDiagonal ||
          square[i][j] !== lettersOnOtherSquare
        ) {
          console.log("NO");
          return;
        }
      }
    }
  }
  countLeft++;
  countRight--;

  if (diagonalChecked == "NotEqual") {
    console.log("NO");
    return;
  }
}
console.log("YES");
