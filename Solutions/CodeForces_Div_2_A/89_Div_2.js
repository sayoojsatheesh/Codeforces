"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}
 
// ********** Code Start **********
 
function main() {
let string = readline().toLowerCase().replace(/\n/g, '');
let stringArray = string.split('');
let newString = [];
 
for(let i=0;i<stringArray.length;i++){
    if(stringArray[i] =='a' || stringArray[i] =='o' || stringArray[i] =='y' || stringArray[i] =='e' || stringArray[i] =='u' || stringArray[i] =='i'){
        newString.push('')
    }else{
        if(i !== stringArray.length -1){
             newString.push('.')
        }
        newString.push(stringArray[i])
    }
}
console.log(newString.join('').replace(/ /g, ''));
 
}