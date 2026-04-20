/*
**Callback function**
  --> A JavaScript callback is a function passed as an argument to another function, which is then executed (or "called back") at a later point in time to complete a specific task.
  This mechanism is fundamental to JavaScript's event-driven and asynchronous programming model.
  Basically we pass a function as argument to another function and later we call it inside that fucntion.


**Asynchronous Callbacks**
  --> Asynchronous callbacks are executed at a later time, allowing the main program to continue running without waiting.
  This is essential for preventing the application from freezing during long-running tasks like network requests.


**Synchronous Callbacks**
  --> Synchronous Callbacks are executed immediately within the outer function, blocking further operations until completion.
  Array methods like map(), filter(), and forEach() use synchronous callbacks.

*/

function explain_callback(name, age, task){
  console.log(name, " what are u doing?")
  console.log(age, " isn't it your age?")
  task();
  console.log("---------------------------------------")
}

function washHands(){
  console.log("Wash your hands after eating.");
}

function takeShower(){
  console.log("Take a shower after eating.")
}

function facebookScroll(){
  console.log("Stop scrolling facebook and eat.")
}

explain_callback("Azizur Tuhin", 24, takeShower);
explain_callback("Siam Ahmed", 26, facebookScroll);
explain_callback("Ratuli Akter", 22, washHands);