function AddUpto(n) {
  return (n * (n + 1)) / 2;
}

const timer1 = performance.now();
AddUpto(1000000000);
const timer2 = performance.now();
console.log(`Elapsed time: ${(timer2 - timer1) / 1000} seconds.`);
