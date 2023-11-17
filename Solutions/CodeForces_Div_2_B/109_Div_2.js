let cardsCount = 1;
let cards = [[10, 1]];
let totalPoints = 0;
let deepCopy = cards.map((arr) => arr);
let higestChance = sortByChance(deepCopy);

let counter = 1;
let chancePointer = 0;
while (counter > 0) {
  counter--;
  if (chancePointer > higestChance.length - 1) {
    console.log(totalPoints);
    return;
  }
  if (higestChance[chancePointer][1] == 0) {
    let tempHigestPoints = 0;
    for (let i = 1; i < higestChance.length; i++) {
      if (higestChance[tempHigestPoints][0] < higestChance[i][0]) {
        tempHigestPoints = i;
      }
    }
    totalPoints = totalPoints + higestChance[tempHigestPoints][0];
    higestChance[tempHigestPoints][0] = 0;
    higestChance[tempHigestPoints][0] = 0;
  } else {
    counter = counter + higestChance[chancePointer][1];
    totalPoints = totalPoints + higestChance[chancePointer][0];
    higestChance[chancePointer][0] = 0;
    higestChance[chancePointer][1] = 0;
  }
  chancePointer++;
}
console.log(totalPoints);
function sortByChance(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j][1] < arr[j + 1][1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
