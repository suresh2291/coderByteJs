/**
 * Have the function abCheck(str) take the str parameter being passed and return
 * the string true if the characters a and b are separated by exactly 3 places
 * anywhere in the string at least once (ie. "lane borrowed" would result in
 * true because there is exactly three characters between a and b). Otherwise
 * return the string false.*/

function abCheck(str) {
    // Convert the string to lowercase for case-insensitive comparison
    str = str.toLowerCase();
  
    // Iterate over the string up to the third-to-last character
    for (let i = 0; i < str.length - 3; i++) {
      // Check if the current character is 'a' and the character 3 positions ahead is 'b'
      if (str[i] === 'a' && str[i + 4] === 'b') {
        return 'true';
      }
    }
  
    // If no match is found, return 'false'
    return 'false';
  }
  
  // Example usage:
  console.log(abCheck("lane borrowed"));
  // Output: "true"
  
  console.log(abCheck("abcde"));
  // Output: "false"
  