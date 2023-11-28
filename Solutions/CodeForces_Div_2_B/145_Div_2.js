let n = 50;
let k = 50;
let lightVarsion = [
    '59', '40', '52', '0',  '65', '49', '3',
    '58', '57', '22', '86', '37', '55', '72',
    '11', '3',  '30', '30', '20', '64', '44',
    '45', '12', '48', '96', '96', '39', '14',
    '8',  '53', '40', '37', '8',  '58', '97',
    '16', '96', '48', '30', '89', '66', '19',
    '31', '50', '23', '80', '67', '16', '11',
    '7'
];
let printArray = [];
let indexString = "";
let min;
for (let i = 0; i < k; i++) {
  let maxValue = Math.max(...lightVarsion);
  console.log(maxValue)
  let index = lightVarsion.findIndex((item) => item == maxValue);
  if (i !== k - 1) {
    printArray.push(index + 1);
    lightVarsion[index] = -1;
  } else {
    printArray.push(index + 1);
    min = lightVarsion[index];
  }
}

console.log(min);
console.log(printArray.join(' '));
