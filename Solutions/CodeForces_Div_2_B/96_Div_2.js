const readline = require('readline');

const MODULO = 1000003;

function brainfuckToUnarySize(program) {
  const binaryCodes = {
    '>': '1000',
    '<': '1001',
    '+': '1010',
    '-': '1011',
    '.': '1100',
    ',': '1101',
    '[': '1110',
    ']': '1111',
  };

  let unarySize = 0;

  for (const char of program) {
    unarySize = (unarySize * 16 + parseInt(binaryCodes[char], 2)) % MODULO;
  }

  return unarySize.toString();
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (program) => {
  const result = brainfuckToUnarySize(program);
  console.log(result);
  rl.close();
});
