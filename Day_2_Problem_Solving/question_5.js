function getLeapYear(year) {
  if ((year % 100 !== 0 && year % 4 === 0) || year % 400 == 0) {
    console.log("leap year");
  } else {
    console.log("not leap year");
  }
}

getLeapYear(2004);
