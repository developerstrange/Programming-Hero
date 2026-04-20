function addNumber(num1, num2){
  var sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const num = arguments[i];
    sum += num;
  }
  return sum;
}


var result = addNumber(2, 5, 334, 65);
console.log(result);