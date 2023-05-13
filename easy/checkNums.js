/**
 * Have the function checkNums(num1,num2) take both parameters being passed and
 * return the string true if num2 is greater than num1, otherwise return the
 * string false. If the parameter values are equal to each other then return the
 * string -1.
 */
function checkNums(num1, num2) {
    if (num2 > num1) {
      return "true";
    } else if (num1 > num2) {
      return "false";
    } else {
      return "-1";
    }
  }
  
  // Example usage:
  console.log(checkNums(5, 10)); // Output: true
  console.log(checkNums(12, 4)); // Output: false
  console.log(checkNums(7, 7)); // Output: -1