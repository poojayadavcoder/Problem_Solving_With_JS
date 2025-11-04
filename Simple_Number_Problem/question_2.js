function printNumber(n) {
  const total = n + 1;
  for (let i = 1; i <= n; i++) {
    const a = total - i;
    console.log(a);
  }
}

printNumber(5);

// num=5 5,4,3,2,1
