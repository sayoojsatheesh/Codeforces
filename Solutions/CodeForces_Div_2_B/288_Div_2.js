let amount = "3852466278439783621701".split("");
let amountChanged = [...amount];
let largest;
let pointer = 0;
let lastDigit = amount[amount.length - 1];
while (pointer < amount.length - 1) {
  if (amount[pointer] % 2 == 0) {
    if (!largest) {
      let temp = amountChanged[pointer];
      amountChanged[pointer] = lastDigit;
      amountChanged[amount.length - 1] = temp;
      largest = amountChanged.join("");
    } else {
      let tempAmount = [...amount];
      let temp = tempAmount[pointer];
      tempAmount[pointer] = lastDigit;
      tempAmount[tempAmount.length - 1] = temp;
      if (largest < tempAmount.join("")) {
        largest = tempAmount.join("");
        
      }
    }
  }
  pointer++;
}
console.log(largest ? largest : -1);
