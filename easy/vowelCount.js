/**
 * Have the function vowelCount(str) take the str string parameter being passed
 * and return the number of vowels the string contains (ie. "All cows eat grass
 * and moo" would return 8). Do not count y as a vowel for this challenge.
 */

//shortSolution
function vowelCount(str) {
  return str.match(/[aeiouAEIOU]/gi).length;
}

//Traditional approach
function vowelCount1(str) {
  var count = 0;
  var vowels = "aeiouAEIOU";

  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(vowelCount("All cows eat grass and moo"));  // Output: 8
console.log(vowelCount("Hello World"));                  // Output: 3
console.log(vowelCount("Testing 1-2-3"));                // Output: 2

console.log(vowelCount1("All cows eat grass and moo"));  // Output: 8
console.log(vowelCount1("Hello World"));                  // Output: 3
console.log(vowelCount1("Testing 1-2-3"));                // Output: 2
console.log(vowelCount1("AEIOUaeiou"));                // Output: 10
