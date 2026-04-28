const person = {
  fullName : "Abdul Rahim",
  age : 32,
  isEmployeed : true,
  address : {
    street : "Block A Mirpur 10",
    city : "Dhaka",
    country : "Bangladesh"
  }
}

// console.log(person.address);
// for(let property in person.address){
//   console.log(person.address[property]);
// }



class Person{
  constructor(name, age, ...address){
    this.name = name,
    this.age = age,
    this.address = new Address(...address);
  }
}

class Address{
  constructor(street, city, country){
    this.street = street,
    this.city = city,
    this.country = country
  }
}

const Person1 = new Person("Nafisul Fuad", 23, "Dattapara 12 bajar", "Dhaka", "Bangladesh");
console.log(Person1.address);