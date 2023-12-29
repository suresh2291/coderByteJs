/**
 * Have the function secondGreatLow(arr) take the array of numbers stored in arr
 * and return the second lowest and second greatest numbers, respectively,
 * separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the
 * output should be 12 98. The array will not be empty and will contain at least
 * 2 numbers. It can get tricky if there's just two numbers!
 */

function secondGreatLow(arr) {
    // Remove duplicates and sort the array
    var sortedArr = Array.from(new Set(arr)).sort(function(a, b) {
      return a - b;
    });
  
    // Check if the array has only two elements
    if (sortedArr.length === 2) {
      return sortedArr[0] + ' ' + sortedArr[1];
    }
  
    // Return the second and second-to-last elements
    return sortedArr[1] + ' ' + sortedArr[sortedArr.length - 2];
  }
  

  console.log(secondGreatLow([7, 7, 12, 98, 106]));
  console.log(secondGreatLow([5, 10]));
  console.log(secondGreatLow([10,5]));
  console.log(secondGreatLow([7,4]));