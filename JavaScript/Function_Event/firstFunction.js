function evenIfyAll(arr){
  var even_arr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    var result = evenIfy(element);
    even_arr.push(result);
  }
  return even_arr;
}

function evenIfy(num){
  if(num % 2 == 0){
    return num;
  }else{
    return num*2;
  }
}

var num = evenIfy(13);
console.log("Square: ", num);



nums = [21, 33, 23, 43, 65, 43];
let rsArr = evenIfyAll(nums);
console.log(rsArr);
console.log("---------------------------------")
fd_age = [22, 23, 21, 25, 26, 27];
let ageArr = evenIfyAll(fd_age);
console.log(ageArr);