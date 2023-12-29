/**
 * Have the function timeConvert(num) take the num parameter being passed and
 * return the number of hours and minutes the parameter converts to (ie. if num
 * = 63 then the output should be 1:3). Separate the number of hours and minutes
 * with a colon.
 * */

function timeConvert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ':' + minutes;
  }

console.log(timeConvert(63));   // Output: 1:3
console.log(timeConvert(120));  // Output: 2:0
console.log(timeConvert(90));   // Output: 1:30
