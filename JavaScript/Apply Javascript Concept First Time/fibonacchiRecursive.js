function fibonacchiRecursiveNumber(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  } else {
    return fibonacchiRecursiveNumber(num - 1) + fibonacchiRecursiveNumber(num - 2);
  }
}

let result = fibonacchiRecursiveNumber(10)
console.log(result)