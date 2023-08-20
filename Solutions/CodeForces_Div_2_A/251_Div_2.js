let n = 2;
let d = 30;
let t = [2, 2];
let totalTime = t.reduce((sum, item) => {
  return (sum = sum + item);
}, 0);
let breakTime = (n - 1) * 10;
let totalTimeTaken = totalTime + breakTime;
let jokesCracked;
if (totalTimeTaken > d) {
  console.log(-1);
  return;
} else {
let jokesCrakedInBreak=(n-1)*2;
let jokesCrakedAtEnd=(d-totalTimeTaken)/5;
jokesCracked=jokesCrakedInBreak+jokesCrakedAtEnd;
console.log(Math.floor(jokesCracked))
}
