/**
 * Have the function letterCountI(str) take the str parameter being passed and
 * return the first word with the greatest number of repeated letters. For
 * example: "Today, is the greatest day ever!" should return greatest because it
 * has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there
 * are no words with repeating letters return -1. Words will be separated by
 * spaces.
 */
/* Possible Solutions 
The letterCountI function takes a string str as input and finds the first word with the greatest number of repeated letters.

First, we split the string into an array of words using the split() method, separating words by spaces. We initialize variables maxCount
to keep track of the maximum repeated letter count found so far and result to store the word with the maximum count.

Then, we iterate over each word in the array using a for loop. For each word, we call the getRepeatedLetterCount function, 
  which counts the number of repeated letters in the word.

If the count of repeated letters for the current word is greater than maxCount, we update maxCount and set result to the current word.

Finally, we return the result, which will be the word with the greatest number of repeated letters. If no word with repeated letters is found, we return -1.

The getRepeatedLetterCount function takes a word as input and counts the number of repeated letters by using an object 
letters to keep track of the letters encountered. If a letter is already in the letters object, 
it means it has been encountered before and is a repeated letter, so we increment the count. Otherwise, we add the letter to the letters object.
*/

function letterCountI(str) {
    let words = str.split(" ");
    let maxCount = 0;
    let result = -1;
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let count = getRepeatedLetterCount(word);
  
      if (count > maxCount) {
        maxCount = count;
        result = word;
      }
    }
  
    return result;
  }
  
  function getRepeatedLetterCount(word) {
    let count = 0;
    let letters = {};
  
    for (let i = 0; i < word.length; i++) {
      let letter = word[i].toLowerCase();
  
      if (letters[letter] !== undefined) {
        count++;
        letters[letter] = undefined; // Mark as counted to avoid duplicate increment
      } else {
        letters[letter] = true;
      }
    }
  
    return count;
  }
  
  // Example usage:
  console.log(letterCountI("Today, is the greatest day ever!")); // Output: "greatest"
  console.log(letterCountI("Hello World")); // Output: "Hello"
  console.log(letterCountI("abcd ef ghij klmno p qrstuvw xyz")); // Output: -1
  
  