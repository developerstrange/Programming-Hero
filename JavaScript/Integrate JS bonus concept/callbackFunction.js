function greetUser(name, greetHandler){
  greetHandler(name);
}

function greetMorning(name){
  console.log("Good morning ",name);
}

function greetEvening(name){
  console.log("Good evening ",name);
}

const Username = 'Keanu Reeves';
greetUser(Username, greetMorning);

greetUser('Henry Cavil', greetEvening);

greetUser('Jason Statham', function(name){
  console.log("Good afternoon, Mr.",name);
})


// Event Delegation
/*

Event delegation is a design pattern in JavaScript used to handle events efficiently by attaching a single event listener to a parent element instead of individual listeners to every child.

*/

// Immedieately Invoking Funciton

// ;(function printUser(){
//   const Username = "Brad Pitt";
//   console.log(Username);
// })();

;(function (){
  const Username = "Brad Pitt";
  console.log(Username);
})();