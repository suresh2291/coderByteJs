/*First Factorial
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. 
For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. 
For the test cases, the range will be between 1 and 18 and the input will always be an integer.
Examples
Input: 4
Output: 24
Input: 8
Output: 40320*/
function FirstFactorial(num) { 

  // code goes here  
   // Base case: if num is 0 or 1, return 1
  if (num === 0 || num === 1) {
    return 1;
  } else {
    // Recursive case: multiply num by the factorial of num-1
    return num * FirstFactorial(num - 1);
  }

}

// Example usage
console.log(FirstFactorial(4)); // Output: 24