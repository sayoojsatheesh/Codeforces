let number = "799";
let includesOtherThan47 =
  number.includes("1") ||
  number.includes("2") ||
  number.includes("3") ||
  number.includes("5") ||
  number.includes("6") ||
  number.includes("8") ||
  number.includes("9") ||
  number.includes("0");
if (!includesOtherThan47) {
  console.log("YES");
} else {
  let divideby4 = number % 4;
  let dividedby7 = number % 7;
  let dividedby47=number % 47;
  if (divideby4 == 0 || dividedby7 == 0 || dividedby47 ==0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
