
// console.time()
// function printNumber(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total = total + i;
//   }
//   console.log(total);
// }

// printNumber(10000000000000);
// 5+4+3+2+1=15

function optimizePrintNumber(n) {
  let total = n*(n+1)/2
   console.log(total);
}

optimizePrintNumber(10000000000000)
console.timeEnd()
