let a = 5;
let b = 1;
let draw = 0;
let aWins;
let bWins;
if ((a - b - 1) % 2 !== 0) {
  draw = 1;
}else if(a==b){
    aWins=0;
    bWins=0;
    draw=6
}
let value1;
let value2;
if (a < b) {
  value1 = a;
  value2 = b;
} else {
  value1 = b;
  value2 = a;
}

let left = Math.abs(0 - value1);
let right = Math.abs(Math.floor((value2 - value1 - 1) / 2));
aWins = left + right;
bWins = 6 - aWins - draw;

let probability =
  a < b
    ? Math.floor(aWins) + " " + draw + " " + Math.floor(bWins)
    : Math.floor(bWins) + " " + draw + " " + Math.floor(aWins);
console.log(probability);
