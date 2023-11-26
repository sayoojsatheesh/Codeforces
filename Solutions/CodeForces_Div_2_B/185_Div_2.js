let a = 1;
let b = 2;
let c = 1;
let d = 2;
let p = a / b;
let q = c / d;
let probability = p / (1 - (1 - p)*(1 - q));
console.log(probability);
