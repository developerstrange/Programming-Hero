const person1 = {
  firstName : "Abir",
  lastName : "Mahmud",
  age : 24,
  isEmployed : true,
  sayHello : function(){
    console.log("Hello, Mr. "+this.firstName+". How are u doing?");
  }
}

const personCopy = Object.create(person1);

const Person2 = {
  firstName : "Karim",
  lastName : "Mia",
  age : 30,
  isEmployed : true,
  welcome : () =>{console.log("Welcome to "+this.firstName+"'s house!")}
}

person1.sayHello();
personCopy.firstName = "Rahim";
personCopy.lastName = "Mia";
personCopy.sayHello();
Person2.welcome();