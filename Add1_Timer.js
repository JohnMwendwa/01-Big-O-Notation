// solution 1 + timer
function AddUpto(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const t1 = performance.now();
AddUpto(1000000000);
const t2 = performance.now();
console.log(`Elapsed time: ${(t2 - t1) / 1000} seconds.`);
