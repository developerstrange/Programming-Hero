function introduction() {
  console.log("This course is about JavaScript!")
  console.log("Welcome to JS world!")
}

introduction()

function doubleIt(num) {
  var doubleResult = num * 2;
  return doubleResult;
}

var first = doubleIt(5)
var second = doubleIt(50)

function add(num1, num2) {
  var total = num1 + num2;
  return total;
}

var totalSum = add(first, second)
console.log(totalSum)