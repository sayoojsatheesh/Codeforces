let string = "472747";
let four = 0;
let seven = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] == 4) {
    four++;
  } else if (string[i] == 7) {
    seven++;
  }
}
if (four > 0 || seven > 0) {
  four > seven ? console.log(4) : console.log(7);
} else {
  console.log(-1);
}
