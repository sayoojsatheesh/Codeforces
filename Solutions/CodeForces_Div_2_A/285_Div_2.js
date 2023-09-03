let mPoints = 500;
let vPoints = 1000;
let mTime = 20;
let vTime = 30;
let mTotal = (mPoints / 250) * mTime;
let vTotal = (vPoints / 250) * vTime;
if (mTotal > vTotal) {
  console.log("Misha");
} else if (vTotal > mTotal) {
  console.log("Vasya");
} else {
  console.log("Tie");
}
