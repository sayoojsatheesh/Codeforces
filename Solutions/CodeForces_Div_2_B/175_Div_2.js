const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const [n, s, t] = input.split(' ').map(Number);

    rl.on('line', (operations) => {
        const p = operations.split(' ').map(Number);
        const result = findMinimumShuffles(n, s, t, p);
        console.log(result);
        rl.close();
    });
});

function findMinimumShuffles(n, s, t, p) {
    let count = 0;
    let current = s;

    while (true) {
        if (current === t) {
            return count;
        }
        current = p[current - 1];
        count++;

        if (current === s) {
            return -1;
        }
    }
}
