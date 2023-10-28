let magicSquare = [
  [0, 3, 6],
  [5, 0, 5],
  [4, 7, 0],
];
if (magicSquare[0][1] == magicSquare[0][2]) {
  magicSquare[0][0] = magicSquare[0][1];
  magicSquare[1][1] = magicSquare[0][1];
  magicSquare[2][2] = magicSquare[0][1];
} else {
    let y = (magicSquare[0][2] + magicSquare[2][0]) / 2;
    magicSquare[1][1] = y;
    let magicNumber = magicSquare[1][0] + magicSquare[1][1] + magicSquare[1][2];
    magicSquare[0][0] = magicNumber - (magicSquare[0][1] + magicSquare[0][2]);
    magicSquare[2][2] = magicNumber - (magicSquare[2][1] + magicSquare[2][0]);
}

magicSquare.map((item) => {
  console.log(`${item[0]} ${item[1]} ${item[2]}`);
});
