/**
 * Have the function letterChanges(str) take the str parameter being passed and
 * modify it using the following algorithm. Replace every letter in the string
 * with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 * Then capitalize every vowel in this new string (a, e, i, o, u) and finally
 * return this modified string.
 */

function letterChanges(str) {
    let modifiedStr = '';
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      // Check if the character is a letter
      if (char.match(/[a-zA-Z]/i)) {
        // Get the next character in the alphabet
        let nextChar = String.fromCharCode(char.charCodeAt(0) + 1);

        // Capitalize vowels
        if (nextChar.match(/[aeiouAEIOU]/i)) {
          nextChar = nextChar.toUpperCase();
        }
  
        modifiedStr += nextChar;
      } else {
        modifiedStr += char;
      }
    }
  
    return modifiedStr;
  }
  
  // Example usage:
  console.log(letterChanges("hello")); // Output: "Ifmmp"
  console.log(letterChanges("xyz")); // Output: "yza"
  console.log(letterChanges("AmruthamSuresh"))