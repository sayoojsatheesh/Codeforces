let p1 = new Promise((resolve, reject) => {
  resolve("hy");
});

let p2 = new Promise((resolve, reject) => {
  reject("reject");
});

p1.then((result) => {
  console.log(result);
  return p2; 
})
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
});

console.log("hello 5");
