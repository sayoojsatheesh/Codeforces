let a = 101;
let b = 102;
let c = a + b;
let tempA = removeZero(a.toString());
let tempB = removeZero(b.toString());
let tempC = removeZero(c.toString());
function removeZero(string) {
  let str = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== "0") {
      str = str + string[i];
    }
  }
  return str;
}
let sumC = +tempA + +tempB;
if (sumC == tempC) {
  console.log("YES");
}else{
    console.log("NO");
}
