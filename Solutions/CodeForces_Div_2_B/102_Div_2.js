let intialMoney = "-12345678.9";
let [integer, decimal] = splitMoneyToIntegerAndFraction(intialMoney);
let formattedInteger = formatInteger(integer);
let formattedDecimal = formatDecimal(decimal);
let sign = formattedInteger[0];
let finalFormattedAmount = "";
if (sign === "-") {
  finalFormattedAmount = formattedInteger.replace('-','');
  finalFormattedAmount =
    "(" + "$" + finalFormattedAmount + "." + formattedDecimal + ")";
} else {
  finalFormattedAmount = "$" + formattedInteger + "." + formattedDecimal;
}

console.log(finalFormattedAmount);

function splitMoneyToIntegerAndFraction(string) {
  let splited = string.split(".");
  let integer = splited[0];
  let fraction = splited[1] ? splited[1] : "00";
  return [integer, fraction];
}

function formatDecimal(decimalString) {
  if (decimalString.length === 2) return decimalString;
  if (decimalString.length === 1) return decimalString + "0";
  if (decimalString.length > 2) {
    let tempString = decimalString[0] + decimalString[1];
    return tempString;
  }
}

function formatInteger(integerString) {
  let count = 0;
  let tempString = "";
  for (let i = integerString.length - 1; i >= 0; i--) {
    count++;
    if (count === 3 && i !== 0 && integerString[i - 1] !== "-") {
      tempString = "," + integerString[i] + tempString;
      count = 0;
    } else {
      tempString = integerString[i] + tempString;
    }
  }
  return tempString;
}
