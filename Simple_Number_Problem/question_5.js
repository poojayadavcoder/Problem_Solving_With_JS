function printNumber(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product = product * i;
  }
  console.log(product);
}

printNumber(10);
