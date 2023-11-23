let newMap=new Map();
let key={name:"sayooj"}
newMap.set(key,[1,2,69])
newMap.set("age",25)
let vale=newMap.get(key);
newMap.forEach((value,item)=>{
  console.log(value,item)
})

