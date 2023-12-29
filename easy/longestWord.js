/**
 * Have the function longestWord(sen) take the sen parameter being passed and
 * return the largest word in the string. If there are two or more words that
 * are the same length, return the first word from the string with that length.
 * Ignore punctuation and assume sen will not be empty.
 */

function longestWord(sen) {
    let words = sen.match(/[a-zA-Z]+/g); // Extract words (ignoring punctuation)
    let longest = '';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
  
    return longest;
  }
  
  // Example usage:
  console.log(longestWord("Hello, world!")); // Output: "Hello"
  console.log(longestWord("Today is a beautiful day")); // Output: "beautiful"
  console.log(longestWord("the quick brownbrownbrown fox jumped"));
  console.log(longestWord("THE QUICK BROWNBROWNBROWN FOX JUMPED"));
  console.log(longestWord("the$%!#$.quick*brown fox jump*!#$!@$!$!!%!00an"));