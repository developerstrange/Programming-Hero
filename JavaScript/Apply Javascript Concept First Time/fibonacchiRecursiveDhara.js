function fibonacchiSeries(num) {
  if (num === 0) {
    return [0];
  } else if (num === 1) {
    return [0, 1];
  } else {
    let fib = fibonacchiSeries(num - 1);
    let nextElement = fib[num - 1] + fib[num - 2];
    fib.push(nextElement);
    return fib;
  }
}

let result = fibonacchiSeries(10);
console.log(result);