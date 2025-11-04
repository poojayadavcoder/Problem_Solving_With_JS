function printNumber(n) {
  let sumOfEven = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      sumOfEven = sumOfEven + i;
    }
  }
  console.log(sumOfEven);
}

printNumber(10);
