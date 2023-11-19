function minimizePower(n, k, powers) {
    let totalPower = 0;
    let minPower = Infinity;
    let startTask = 0;
  
    // Iterate through each possible starting task
    for (let i = 0; i < k; i++) {
      let currentPower = 0;
      let j = i;
  
      // Calculate total power for the current starting task
      while (j < n) {
        currentPower += powers[j];
        j += k;
      }
  
      // Update minimum power and starting task if needed
      if (currentPower < minPower) {
        minPower = currentPower;
        startTask = i + 1; // Task numbering starts from 1
      }
    }
  
    console.log(startTask);
  }
  
  // Read input
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let n, k, powers;
  
  // Read the first line of input
  rl.question('', (line1) => {
    const [nStr, kStr] = line1.split(' ');
    n = parseInt(nStr);
    k = parseInt(kStr);
  
    // Read the second line of input
    rl.question('', (line2) => {
      powers = line2.split(' ').map(Number);
  
      // Call the function with the provided input
      minimizePower(n, k, powers);
  
      // Close the interface
      rl.close();
    });
  });
  