let string = "{a, b, c,a,c}";
let stringArray = string.split("").filter((item) => {
  if (item !== "{" && item !== " " && item !== "}" && item !== ",") {
    return item;
  }
});
let distinct=[]
if (string.length <= 2) {
  console.log(0);
} else {
stringArray.map((item)=>{
    let found=distinct.some((disintItem)=>{
         return item == disintItem
    });
  if(!found){
    distinct.push(item)
  }
})
}
console.log(distinct.length)