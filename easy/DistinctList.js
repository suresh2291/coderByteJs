/*
Have the function DistinctList(arr) take the array of numbers stored in arr and determine the total number of duplicate entries.
For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two duplicates of one of 
the elements.
Examples
Input: [0,-2,-2,5,5,5]
Output: 3
Input: [100,2,101,4]
Output: 0
*/

function DistinctList(arr) {
    var duplicates = 0;
    var count = {};
  
    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      count[num] = count[num] ? count[num] + 1 : 1;
      if (count[num] > 1) {
        duplicates++;
      }
    }
  
    return duplicates;
  }
  
  // Test cases
  console.log(DistinctList([1, 2, 2, 2, 3])); // Output: 2
  console.log(DistinctList([0, -2, -2, 5, 5, 5])); // Output: 3
  console.log(DistinctList([100, 2, 101, 4])); // Output: 0
  