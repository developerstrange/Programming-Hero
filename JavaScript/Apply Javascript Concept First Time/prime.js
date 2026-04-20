function checkPrimeNumber(num){
  if(num <=1 ){
    return "Not a prime number.";
  }
  if(num ===2 || num ===3){
    return "Is a prime number.";
  }
  for(let i = 2; i<Math.sqrt(num); i++){
    let number = num % i;
    if(number === 0){
      return "Not a prime number.";
    }
  }
  return "Is a prime number.";
}

let result = checkPrimeNumber(97);
console.log(result);