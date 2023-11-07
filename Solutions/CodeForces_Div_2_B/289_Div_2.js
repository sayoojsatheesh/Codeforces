const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solve(n, k, a) {
    let maxPebbles = Math.max(...a);
    let minPebbles = Math.min(...a);
    if (maxPebbles > minPebbles + k) {
        return "NO";
    }

    let colors = new Array(n);
    for (let i = 0; i < n; i++) {
        colors[i] = new Array(a[i]);
    }

    let m = minPebbles;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            colors[i][j] = 1;
        }
        for (let j = m; j < a[i]; j++) {
            colors[i][j] = (j - m + 1);
        }
    }

    let result = "YES\n";
    for (let i = 0; i < n; i++) {
        result += colors[i].join(' ') + '\n';
    }
    return result.trim();
}

rl.on('line', (input) => {
    const [n, k] = input.split(' ').map(Number);
    rl.on('line', (pebbles) => {
        const a = pebbles.split(' ').map(Number);
        const output = solve(n, k, a);
        console.log(output);
        rl.close();
    });
});
