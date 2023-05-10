/**
 * Have the function arithGeo(arr) take the array of numbers stored in arr and
 * return the string "Arithmetic" if the sequence follows an arithmetic pattern
 * or return "Geometric" if it follows a geometric pattern. If the sequence
 * doesn't follow either pattern return -1. An arithmetic sequence is one where
 * the difference between each of the numbers is consistent, where as in a
 * geometric sequence, each term after the first is multiplied by some constant
 * or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2,
 * 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be
 * entered, and no array will contain all the same elements.
 */

function arithGeo(arr) {
    // Check if the sequence follows an arithmetic pattern
    const isArithmetic = isSequencePattern(arr, (a, b) => b - a);
  
    // Check if the sequence follows a geometric pattern
    const isGeometric = isSequencePattern(arr, (a, b) => b / a);
  
    if (isArithmetic) {
      return "Arithmetic";
    } else if (isGeometric) {
      return "Geometric";
    } else {
      return -1;
    }
  }
  
  // Helper function to check if a sequence follows a specific pattern
  function isSequencePattern(arr, patternFunc) {
    const pattern = patternFunc(arr[0], arr[1]);
  
    for (let i = 1; i < arr.length - 1; i++) {
      if (patternFunc(arr[i], arr[i + 1]) !== pattern) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  console.log(arithGeo([2, 4, 6, 8]));
  // Output: "Arithmetic"
  
  console.log(arithGeo([2, 6, 18, 54]));
  // Output: "Geometric"
  
  console.log(arithGeo([2, 5, 10, 17]));
  // Output: -1
  