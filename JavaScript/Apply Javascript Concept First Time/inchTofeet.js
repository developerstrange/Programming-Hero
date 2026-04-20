function inchToFeet(inch){
  let calculated_feet = inch/12;
  return calculated_feet;
}
var inches = [120, 130, 140];
var feet1 = inchToFeet(100);
console.log(feet1);
var feet2 = inchToFeet(inches[1]);
console.log(feet2)
// console.log(calculated_feet)
