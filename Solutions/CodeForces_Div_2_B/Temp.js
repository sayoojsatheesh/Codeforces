let arr = [
  { name: "sayooj", age: 25 },
  { name: "sa", age: 27 },
  { name: "mu", age: 22 },
];

let to = arr.reduce((total, item) => {
    if(item.age<=25) total.push(item.name);
    return total
}, []);

console.log(to)