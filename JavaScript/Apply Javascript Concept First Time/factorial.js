function factorial(num) {
  let factorialNum = 1;
  for (let i = 1; i <= 10; i++) {
    factorialNum = factorialNum * i;
  }
  return factorialNum;
}

let num = 10;
const factorialNumber = factorial(num);
console.log("Factorial Number of the give number is: ", factorialNumber)