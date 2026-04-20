function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let arr = [54, 54, 58, 63, 88, 98, 97, 41, 25];
let total = sumArray(arr);
console.log("Summation of the array elements are: ", total);