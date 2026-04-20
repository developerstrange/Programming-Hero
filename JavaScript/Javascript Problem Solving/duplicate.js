let arr = [1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9];
let uniqueArray = [];

for(let i = 0; i<arr.length; i++){
  let element = arr[i];
  let index = uniqueArray.indexOf(element);
  if(index === -1){
    uniqueArray.push(element);
  }
}

console.log(uniqueArray);