let n=3;
let bottles=4;
let litters=5;
let lime=10;
let cut=8;
let salt=100;
let nl=3;
let np=1;
let totalToats=Math.floor((bottles*litters)/nl);

let totalLimes=Math.floor(lime*cut);
let totalSalt=Math.floor(salt/np);
console.log(totalToats,totalLimes,totalSalt)
let min=Math.min(totalToats,totalLimes,totalSalt);
console.log(min/n)