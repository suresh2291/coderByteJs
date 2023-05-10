/*Min Window Substring
Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, 
which will contain only two strings, 
the first parameter being the string N and the second parameter being a string K of some characters, 
and your goal is to determine the smallest substring of N that contains all the characters in K.
For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. 
So for this example your program should return the string dae.

Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. 
Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.
Examples
Input: ["ahffaksfajeeubsne", "jefaa"]
Output: aksfaje
Input: ["aaffhkksemckelloe", "fhea"]
Output: affhkkse
*/
function MinWindowSubstring(strArr) {
  const N = strArr[0];
  const K = strArr[1];
  
  // Create a frequency map of characters in K
  const freqK = {};
  for (const char of K) {
    freqK[char] = freqK[char] ? freqK[char] + 1 : 1;
  }

  let start = 0;
  let end = 0;
  let minLen = Infinity;
  let minStart = 0;
  let found = 0;
  const freqN = {};

  // Iterate over N and find the smallest substring containing all characters in K
  while (end < N.length) {
    const charEnd = N[end];
    freqN[charEnd] = freqN[charEnd] ? freqN[charEnd] + 1 : 1;
    if (charEnd in freqK && freqN[charEnd] <= freqK[charEnd]) {
      found++;
    }

    while (found === K.length) {
      if (end - start + 1 < minLen) {
        minLen = end - start + 1;
        minStart = start;
      }

      const charStart = N[start];
      freqN[charStart]--;
      if (charStart in freqK && freqN[charStart] < freqK[charStart]) {
        found--;
      }
      start++;
    }

    end++;
  }

  if (minLen === Infinity) {
    return '';
  }

  return N.slice(minStart, minStart + minLen);
}

// Example usage:
console.log(MinWindowSubstring(["aaabaaddae", "aed"]));
// Output: "dae"

console.log(MinWindowSubstring(["aabdccdbcacd", "aad"]));
// Output: "aabd"

  
