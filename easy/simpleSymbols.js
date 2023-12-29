/**
 * Have the function simpleSymbols(str) take the str parameter being passed and
 * determine if it is an acceptable sequence by either returning the string true
 * or false. The str parameter will be composed of + and = symbols with several
 * letters between them (ie. ++d+===+c++==a) and for the string to be true each
 * letter must be surrounded by a + symbol. So the string to the left would be
 * false. The string will not be empty and will have at least one letter.
 */

function simpleSymbols(str) {
    // Check the first and last characters
    if (str[0] !== '+' || str[str.length - 1] !== '+') {
      return false;
    }
  
    // Check the letters in the middle
    for (var i = 1; i < str.length - 1; i++) {
      if (/[a-zA-Z]/.test(str[i])) { // Check if the character is a letter
        if (str[i - 1] !== '+' || str[i + 1] !== '+') {
          return false;
        }
      }
    }
  
    return true;
  }

console.log(simpleSymbols("++d+===+c++==a"));  // Output: false
console.log(simpleSymbols("+a+b+c+"));        // Output: true
console.log(simpleSymbols("+a+b+c+="));       // Output: false
