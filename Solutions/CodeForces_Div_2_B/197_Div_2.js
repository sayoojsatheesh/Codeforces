let n = 4;
let m = 3;
let houseArray = [3, 2, 3];
let currentHouse = 1;
let pointer = 0;
let time = 0;
let start = false;
while (pointer < m) {
  time = time + Math.abs(currentHouse - houseArray[pointer]);
  console.log(time)
  currentHouse = houseArray[pointer];
  pointer++;
  if (houseArray[pointer] < currentHouse) {
    time = time + Math.abs(currentHouse - n)+1;
    start = true;
    currentHouse = 1;
  }
}
console.log(time);
