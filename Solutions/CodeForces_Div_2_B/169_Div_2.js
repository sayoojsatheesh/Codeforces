let string = "aba";
let stringArray = string.split("");
let occ = {};
for (let i = 0; i < stringArray.length; i++) {
  occ[stringArray[i]] = occ[stringArray[i]] ? occ[stringArray[i]] + 1 : 1;
}
let odd = 0;
for (let key in occ) {
  if (occ[key] % 2 !== 0) {
    odd++;
  }
}
if(odd<=1){
    console.log("First")
}else{
    if(odd % 2==0){
        console.log("Second")
    }else{
        console.log("First")
    }
}
