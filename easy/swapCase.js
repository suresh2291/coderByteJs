/**
 * Have the function swapCase(str) take the str parameter and swap the case of
 * each character. For example: if str is "Hello World" the output should be
 * hELLO wORLD. Let numbers and symbols stay the way they are.
 */

//solution1
function swapCase(str) {
    var swapped = '';
    
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
  
      // Check if the character is an alphabet character
      if (/[a-zA-Z]/.test(char)) {
        // Swap the case of the character
        if (char === char.toLowerCase()) {
          swapped += char.toUpperCase();
        } else {
          swapped += char.toLowerCase();
        }
      } else {
        swapped += char;
      }
    }
  
    return swapped;
  }

  
  //solution 2
  function swapCaseShort(str) {
    return str
      .split('')
      .map(char => /[a-zA-Z]/.test(char) ? (char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()) : char)
      .join('');
  }

console.log(swapCase("Hello World"));     // Output: hELLO wORLD
console.log(swapCase("JavaScript"));      // Output: jAVASCRIPT
console.log(swapCase("123!@#$"));         // Output: 123!@#$
console.log(swapCase("Testing 1-2-3"));   // Output: tESTING 1-2-3
console.log(swapCaseShort("Hello World"));     // Output: hELLO wORLD
console.log(swapCaseShort("JavaScript"));      // Output: jAVASCRIPT
console.log(swapCaseShort("123!@#$"));         // Output: 123!@#$
console.log(swapCaseShort("Testing 1-2-3"));   // Output: tESTING 1-2-3

