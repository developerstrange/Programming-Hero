let marks = [52, 54, 12, 88, 14, 9, 78, 96, 98, 95, 1, 6, 64, 67, 41, 78];
let max = marks[0];

for (let i = 0; i < marks.length; i++) {
  let element = marks[i];
  if(element > max){
    max = element;
  }
}

console.log("Maximum marks is: ",max)