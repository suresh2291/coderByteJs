/**
 * Have the function palindrome(str) take the str parameter being passed and
 * return the string true if the parameter is a palindrome, (the string is the
 * same forward as it is backward) otherwise return the string false. For
 * example: "racecar" is also "racecar" backwards. Punctuation and numbers will
 * not be part of the string.
 * */

function palindrome(str) {
    const formattedStr = str.toLowerCase().replace(/[^a-z]/g, '');
    const len = formattedStr.length;
  
    for (let i = 0; i < len / 2; i++) {
      if (formattedStr[i] !== formattedStr[len - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  
//Another short solution
function palindromeShort(str) {
    const formattedStr = str.toLowerCase().replace(/[^a-z]/g, '');
    return formattedStr === formattedStr.split('').reverse().join('');
  }
  
  // Example usage:
  console.log(palindrome("racecar")); // Output: true
  console.log(palindrome("hello")); // Output: false
  console.log(palindrome("A man, a plan, a canal, Panama")); // Output: true
  // Example usage:
  console.log(palindromeShort("racecar")); // Output: true
  console.log(palindromeShort("hello")); // Output: false
  console.log(palindromeShort("A man, a plan, a canal, Panama")); // Output: true
  