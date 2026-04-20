function isLeapYear(year) {
  const reminder1 = year % 400;
  const reminder2 = year % 100;
  const reminder3 = year % 4;
  if (reminder1 === 0 || (reminder2 !== 0 && reminder3 === 0)) {
    return true;
  }
  else {
    return false;
  }
}

const Year = 2022;
const leapYear = isLeapYear(Year);
if (leapYear === true) {
  console.log("Yes, your given year is a leap year!")
} else {
  console.log("No, your given year is not a leap year!")
}