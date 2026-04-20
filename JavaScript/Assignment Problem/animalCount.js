function animalCount(animalNumber) {
  let animal = 0;
  if (animalNumber <= 10) {
    animal = animalNumber * 50;
  } else if (animalNumber <= 20) {
    firstPart = 10 * 50;
    remaining = animalNumber - 10;
    secondPart = remaining * 100;
    animal = firstPart + secondPart;
  } else {
    firstPart = 10 * 50;
    secondPart = 10 * 100;
    remaining = animalNumber - 20;
    thirdPart = remaining * 150;
    animal = firstPart + secondPart + thirdPart;
  }
  return animal;
}

let animal = animalCount(7);
console.log(animal);