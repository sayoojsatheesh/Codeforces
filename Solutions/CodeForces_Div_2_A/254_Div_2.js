let n = 2;
let m = 50;
let chessBoard = [
  [
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '-', '-', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '-', '.', '.',
    '.', '.'
  ],
  [
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '-', '.', '.', '.',
    '.', '.'
  ]
];
let chessMan = "B";
let repeat=true;
let inCheck=false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (chessBoard[i][j] == ".") {
        if (
          chessBoard[i == 0 ? i : i - 1][j] !== chessMan &&
          chessBoard[i == n - 1 ? i : i + 1][j] !== chessMan &&
          chessBoard[i][j - 1] !== chessMan &&
          chessBoard[i][j + 1] !== chessMan
        ) {
          chessBoard[i][j] = chessMan;
        } else {
          chessMan == "B" ? (chessMan = "W") : (chessMan = "B");
          if (chessBoard[i == 0 ? i : i - 1][j] == chessMan) {
            chessMan == "B" ? (chessMan = "W") : (chessMan = "B");
            chessBoard[i == 0 ? i : i - 1][j] == chessMan;
            chessMan == "B" ? (chessMan = "W") : (chessMan = "B");
            inCheck=true;
          }
          if (chessBoard[i == n - 1 ? i : i + 1][j] == chessMan) {
            chessMan == "B" ? (chessMan = "W") : (chessMan = "B");
            chessBoard[i == n - 1 ? i : i + 1][j] == chessMan;
            chessMan == "B" ? (chessMan = "W") : (chessMan = "B");
            inCheck=true;
          }
          chessBoard[i][j] = chessMan;
        }
      }
    }
  }
  console.log(chessBoard)
 

let print = "";
chessBoard.map((item) => {
  for (let i = 0; i < item.length; i++) {
    print = print + item[i] + " ";
  }
  print = print + "\n";
});
console.log(print);
