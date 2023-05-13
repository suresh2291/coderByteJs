/**
 * Have the function firstReverse(str) take the str parameter being passed and
 * return the string in reversed order. For example: if the input string is
 * "Hello World and Coders" then your program should return the string
 * "sredoC dna dlroW olleH".
 */

//solution 1 wo Array functions

function firstReverse(str) {
    var reversedStr = '';
  
    for (var i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
  
    return reversedStr;
  }
  
  // Example usage:
  console.log(firstReverse("Hello World and Coders")); // Output: "sredoC dna dlroW olleH"
  