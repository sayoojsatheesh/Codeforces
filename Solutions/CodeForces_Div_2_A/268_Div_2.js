let n = 10;
let array1 = [8, 8, 10, 7, 3, 1, 4, 2, 6];
let array2 = [8, 9, 5, 10, 3, 7, 2, 4, 8];
let array3 =  [...new Set([...array1, ...array2].sort(function(a,b){
    return a-b;
}))];
let output = "I become the guy.";
for (let i = 0; i < n; i++) {
  if (i + 1 !== array3[i]) {
    output = "Oh, my keyboard!";
    break;
  }
}

console.log(output)
