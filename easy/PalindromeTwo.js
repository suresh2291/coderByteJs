/*
Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter
is a palindrome, (the string is the same forward as it is backward) otherwise return the string false.
The parameter entered may have punctuation and symbols but they should not affect whether the string 
is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.
*/
function PalindromeTwo(str) {
  // Remove punctuation and symbols and convert to lowercase
  var cleanedStr = str.replace(/[\W_]/g, "").toLowerCase();

  // Reverse the cleaned string
  var reversedStr = cleanedStr.split("").reverse().join("");

  // Check if the cleaned string is equal to its reverse
  if (cleanedStr === reversedStr) {
    return "true";
  } else {
    return "false";
  }
}
console.log(PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna")); // Output: true
