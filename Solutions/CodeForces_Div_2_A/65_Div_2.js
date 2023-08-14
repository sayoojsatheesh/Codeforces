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
let n = parseInt(readline());
let words=[];
for(let i=0;i<n;i++){
    words.push(readline().replace(/\n/g, ''));
}
 
for(let i=0;i<words.length;i++){
    if(words[i].length <= 11){
        console.log(words[i])
    }else{
       let stringArray= words[i].split('');
       let middelLength=words[i].length -3;
       let newString=stringArray[0]+middelLength+stringArray[words[i].length -2];
       console.log(newString)
        
    }
}
 
}
 