const paragraph = 'helhcludoo';
const regex = /[a-z]*?h+[a-df-z]*?e+[a-km-z]*?l+[a-km-z]*?l+[a-np-z]*?o+/g;
const found = paragraph.match(regex);
console.log(found)
found !== null?console.log('YES'):console.log('NO')