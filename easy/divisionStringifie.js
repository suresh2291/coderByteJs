/**
 * Have the function divisionStringified(num1,num2) take both parameters being
 * passed, divide num1 by num2, and return the result as a string with properly
 * formatted commas. If an answer is only 3 digits long, return the number with
 * no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789
 * and num2 is 10000 the output should be "12,346".
 */

function divisionStringified(num1, num2) {
    var result = Math.round(num1 / num2).toString();
  
    if (result.length > 3) {
      var commaIndex = result.length - 3;
  
      while (commaIndex > 0) {
        result = result.slice(0, commaIndex) + "," + result.slice(commaIndex);
        commaIndex -= 3;
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(divisionStringified(123456789, 10000)); // Output: "12,346"
  console.log(divisionStringified(2, 3)); // Output: "1"
  