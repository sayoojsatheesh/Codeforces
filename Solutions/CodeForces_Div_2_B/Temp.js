let fs = "";
let f = 0;
let s = 1;
let print = "";
let i = 1;
let t = parseInt(s) + parseInt(f);
console.log(f,s)
while (t <= 10) {
  console.log(`${t}`);
  f = s;
  s = t;
  t = parseInt(s) + parseInt(f);
  i++;
}
