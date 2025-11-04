function printNumber(n) {
  let sumOfOddNum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sumOfOddNum = sumOfOddNum + i;
    }
  }
  console.log(sumOfOddNum);
}

printNumber(10);
