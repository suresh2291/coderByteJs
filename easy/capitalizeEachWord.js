/**
 * Have the function letterCapitalize(str) take the str parameter being passed
 * and capitalize the first letter of each word. Words will be separated by only
 * one space.
 */
function letterCapitalize(str) {
    var capitalizedStr = '';
  
    for (var i = 0; i < str.length; i++) {
        //check if the current character is the first character (i === 0) or the character preceding it is a space (str[i - 1] === ' ') Captilize that character.
      if (i === 0 || str[i - 1] === ' ') {
        capitalizedStr += str[i].toUpperCase();
      } else {
        capitalizedStr += str[i];
      }
    }
  
    return capitalizedStr;
  }
  
  // Example usage:
  console.log(letterCapitalize("hello world")); // Output: "Hello World"
  console.log(letterCapitalize("capitalize the first letter")); // Output: "Capitalize The First Letter"
  