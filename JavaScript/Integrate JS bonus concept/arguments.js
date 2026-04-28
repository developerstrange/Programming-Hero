// Arguments is a array like object, not an array

function getName(firstName, lastName){
  console.log(arguments);
  let fullName = ' ';
  for(let i=0; i<arguments.length; i++){
    const namePart = arguments[i];
    fullName = fullName + ' ' + namePart;
  }

  return fullName;

}

const name = getName('Azizur', 'Rahman', 'Tuhin', 'Mia');
console.log(name);