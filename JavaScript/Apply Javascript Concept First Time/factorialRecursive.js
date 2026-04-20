function calculate_factorial(number){
  if(number === 0){
    return 1;
  }
  let factorial = number * calculate_factorial(number-1);
  return factorial;
}

const factorialNumber = calculate_factorial(5);
console.log(factorialNumber)