const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let m, n;
let matrix_B = [];

rl.on('line', (input) => {
    if (!m) {
        [m, n] = input.split(' ').map(Number);
    } else {
        matrix_B.push(input.split(' ').map(Number));
        if (matrix_B.length === m) {
            reconstructMatrixA(matrix_B);
            rl.close();
        }
    }
});

function reconstructMatrixA(matrix_B) {
    const matrix_A = Array.from({ length: m }, () => Array(n).fill(1));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix_B[i][j] === 0) {
                for (let k = 0; k < m; k++) {
                    matrix_A[k][j] = 0;
                }
                for (let k = 0; k < n; k++) {
                    matrix_A[i][k] = 0;
                }
            }
        }
    }

    const reconstructed_B = Array.from({ length: m }, () => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < m; k++) {
                reconstructed_B[i][j] = reconstructed_B[i][j] || matrix_A[i][k] || matrix_A[k][j];
            }
        }
    }

    if (compareMatrices(reconstructed_B, matrix_B)) {
        console.log('YES');
        for (let i = 0; i < m; i++) {
            console.log(matrix_A[i].join(' '));
        }
    } else {
        console.log('NO');
    }
}

function compareMatrices(matrix1, matrix2) {
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix1[i].length; j++) {
            if (matrix1[i][j] !== matrix2[i][j]) {
                return false;
            }
        }
    }
    return true;
}
