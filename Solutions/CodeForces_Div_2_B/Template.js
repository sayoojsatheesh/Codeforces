const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countOnes(n) {
  let count = 0;
  while (n !== 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}

function main() {
  rl.question('', (input) => {
    const [n, m, k] = input.trim().split(' ').map(Number);
    const soldiers = [];

    rl.on('line', (line) => {
      soldiers.push(Number(line));
    });

    rl.on('close', () => {
      let count = 0;
      for (let i = 0; i < m; i++) {
        const res = soldiers[i] ^ soldiers[m];
        if (countOnes(res) <= k) {
          count++;
        }
      }

      console.log(count);
    });
  });
}

main();
