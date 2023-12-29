/**
 * Have the function numberAddition(str) take the str parameter, search for all
 * the numbers in the string, add them together, then return that final number.
 * For example: if str is "88Hello 3World!" the output should be 91. You will
 * have to differentiate between single digit numbers and multiple digit numbers
 * like in the example above. So "55Hello" and "5Hello 5" should return two
 * different answers. Each string will contain at least one letter or symbol.
 */

/* 
Possible Solution
Iterate over each character in the input string using a for loop. We check if the character is a numeric digit using the isNumeric function, 
which uses a regular expression to test for numeric characters.

If the character is a digit, we append it to the currentNum string. This allows us to build multi-digit numbers. 
When we encounter a non-digit character or reach the end of the string, we add the parsed integer value of currentNum to the sum and reset currentNum to an empty string.

Finally, we check if there's any remaining number in currentNum at the end of the string and add it to the sum if it's not empty.

The example usage demonstrates the function's behavior with the provided test cases.

This solution has a time complexity of O(n), where n is the length of the input string.
*/
function numberAddition(str) {
    let sum = 0;
    let currentNum = '';
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (isNumeric(char)) {
        currentNum += char;
      } else if (currentNum !== '') {
        sum += parseInt(currentNum);
        currentNum = '';
      }
    }
  
    if (currentNum !== '') {
      sum += parseInt(currentNum);
    }
  
    return sum;
  }
  
  function isNumeric(char) {
    return /\d/.test(char);
  }
  
  // Example usage:
  console.log(numberAddition("88Hello 3World!")); // Output: 91
  console.log(numberAddition("55Hello")); // Output: 55
  console.log(numberAddition("5Hello 5")); // Output: 10
  console.log(numberAddition("28ad 11 fd as22dfa19")); //Output: 80
  