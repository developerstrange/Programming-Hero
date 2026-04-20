let business = 440;
let minister = 7770;
let govt_employee = 250;
/*
if(business > minister && business > govt_employee){
  console.log('Business is bigger!');
}else if(minister > business && minister > govt_employee){
  console.log('Minister is bigger!');
}else{
  console.log('Govt employee is bigger!')
}*/

let result = Math.max(business,minister,govt_employee);
console.log(result,"is bigger");