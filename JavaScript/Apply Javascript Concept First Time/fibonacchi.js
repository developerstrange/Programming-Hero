function fibonacchiGenerator(arr,number){
  for(let i = 2; i<=number; i++){
    arr[i] = arr[i-1]+arr[i-2];
  }
  return arr;
}

const num = 12;
let fib = [0, 1];
let result = fibonacchiGenerator(fib,num);
console.log(result);