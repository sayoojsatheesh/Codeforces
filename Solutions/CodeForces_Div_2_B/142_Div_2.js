let n = 1;
let numbers = [999966000289];
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function hasThreeDivisors(num) {
    let sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt) && isPrime(sqrt);
}

let result = "";
for (let i = 0; i < n; i++) {
    if (hasThreeDivisors(numbers[i])) {
        result += "YES\n";
    } else {
        result += "NO\n";
    }
}
