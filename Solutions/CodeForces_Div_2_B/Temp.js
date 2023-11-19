let array = [0, 1, 0, 3, 12];
for (let i = 0; i < array.length; i++) {
  if (array[i] == 0) {
    array.push(array[i]);
    array.splice(i, 1);
  }
}
console.log(array)
