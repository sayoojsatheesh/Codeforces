let n = 10;
let p = 10;
let reserved = n % 2 == 0 ? n / 2 : (n + 1) / 2;
if(p<=reserved){
console.log(p+(p-1))
}else{
console.log((p-reserved)*2)
}
