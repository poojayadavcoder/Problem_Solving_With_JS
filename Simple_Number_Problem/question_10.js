function printNumber(n) {
  const arr = [];
  let index = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      arr[index] = i;
      ++index;
    }
  }
  for (let i = 0; i <= arr.length - 1; i++) {
    let square = arr[i] * arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == square) {
        console.log(arr[j]);
      }
    }
  }
}

printNumber(100);
