let l = 900000000000000009n;
let r = 900000000000000029n;
let totalNumbers = r - l + 1n; // Add 1n here

for (let i = 0n; i < totalNumbers; i++) {
  for (let j = i + 1n; j < totalNumbers; j++) {
    for (let k = j + 1n; k < totalNumbers; k++) {
      let a = l + i;
      let b = l + j;
      let c = l + k;
      if (areCoprime(b, a) && areCoprime(c,b) && !areCoprime(c,a) ) {
        console.log(`${a.toString()} ${b.toString()} ${c.toString()}`);
        return;
      }
    }
  }
}

function gcd(a, b) {
  if (b === 0n) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function areCoprime(a, b) {
  return gcd(a, b) === 1n;
}
