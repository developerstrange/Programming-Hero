function feetToMile(num) {
  // 1 Mile = 5280 Feet
  let result = num / 5280;
  return result;
}

console.log("What is the mile for 330 feet?");
let mileResult = feetToMile(330);
console.log(`330 Feet = ${mileResult} Mile`);