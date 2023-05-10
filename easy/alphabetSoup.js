/* Have the function alphabetSoup(str) take the str string parameter being
 * passed and return the string with the letters in alphabetical order (ie.
 * hello becomes ehllo). Assume numbers and punctuation symbols will not be
 * included in the string.*/

function alphabetSoup(str) {
    // Convert the string to an array of characters using the spread operator
    const chars = [...str];
  
    // Sort the characters in alphabetical order using the sort() method
    chars.sort();
  
    // Convert the sorted characters back to a string using the join() method
    const sortedStr = chars.join('');
  
    return sortedStr;
  }
  
  // Example usage:
  console.log(alphabetSoup("hello"));
  // Output: "ehllo"
  
  console.log(alphabetSoup("javascript"));
  // Output: "aacijprstv"
//Solution 2 without using inbuilt sort method
function alphabetSoupWOSort(str) {
    // Convert the string to an array of characters using the spread operator
    const chars = [...str];
  
    // Bubble sort implementation
    for (let i = 0; i < chars.length - 1; i++) {
      for (let j = 0; j < chars.length - i - 1; j++) {
        // Compare adjacent characters and swap them if they are out of order
        if (chars[j] > chars[j + 1]) {
          const temp = chars[j];
          chars[j] = chars[j + 1];
          chars[j + 1] = temp;
        }
      }
    }
  
    // Convert the sorted characters back to a string using the join() method
    const sortedStr = chars.join('');
  
    return sortedStr;
  }  