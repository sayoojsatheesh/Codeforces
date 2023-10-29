const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n, t;
let books = [];

rl.on('line', (input) => {
    if (!n) {
        [n, t] = input.split(' ').map(Number);
    } else {
        books = input.split(' ').map(Number);
    }
});

rl.on('close', () => {
    let left = 0;
    let right = 0;
    let sum = 0;
    let maxBooks = 0;

    while (right < n) {
        sum += books[right];

        while (sum > t) {
            sum -= books[left];
            left++;
        }

        maxBooks = Math.max(maxBooks, right - left + 1);
        right++;
    }

    console.log(maxBooks);
});
