let n = 7;
let set = [3, 3, 2, 7, 9, 6, 8];
let chestCount = 0;
let bicepsCount = 0;
let backCount = 0;
let flag = "chest";
for (let i = 0; i < n; i++) {
  if (flag == "chest") {
    chestCount++;
    flag = "biceps";
  } else if (flag == "biceps") {
    bicepsCount++;
    flag = "back";
  } else {
    backCount++;
    flag = "chest";
  }
}
if(chestCount >bicepsCount && chestCount >backCount){
    console.log('chest')
}else if(bicepsCount>chestCount && bicepsCount>backCount){
    console.log('biceps')
}else{
    console.log('back')
}
