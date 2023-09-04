let n = 1;
let m = 1;
let pass = [2];
let fail = [4];
let sortedPass = pass.sort(function (a, b) {
  return a - b;
});
let tempHighest=sortedPass[0]*2;
let highest = sortedPass[sortedPass.length - 1];
if(tempHighest>highest){
    highest=tempHighest;
}
if (n == 1) {
  highest = 2 * sortedPass[0];
}
if (!(2 * sortedPass[0] <= highest)) {
  console.log(-1);
  return;
}

let failedSorted = fail.sort(function (a, b) {
  return a - b;
});
if (failedSorted[0] <= highest) {
  console.log(-1);
  return;
}
console.log(highest);
