var fruit = `apple`;
switch (fruit) {
  case 'Pinapple':
    console.log("It is a pinapple!")
    break;
  case 'Orange':
  case "Mango":
    console.log("It is either mango or orange!")
    break;
  case 'apple':
    console.log("Yes, it is an apple!")
    break;
  default:
    console.log("Fruits remain unidentified!")
}