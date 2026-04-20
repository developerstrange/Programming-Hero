//Let's assume 1 chair require 10 feet wood
// 1 table require 16 feet wood
// 1 bed require 24 feet wood
// we have to make 4 chair 2 table and 2 bed

function woodCalculator(num1, num2, num3) {
  let chairWood = 4 * num1;
  let tableWood = 2 * num2;
  let bedWood = 2 * num3;
  let totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}
let chair = 4;
let table = 2;
let bed = 2;
console.log(`How much wood will be needed to make ${chair}, ${table} and ${bed} ?`);
let total = woodCalculator(chair, table, bed);
console.log(`${total} feet wood will be needed to make them.`);