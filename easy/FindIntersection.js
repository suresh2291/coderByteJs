/*
Have the function FindIntersection(strArr) read the array of strings stored in 
strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order,
the second element will represent a second list of comma-separated numbers (also sorted). 
Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. 
If there is no intersection, return the string false.
Examples
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13
Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
*/
function FindIntersection(strArr) {
    // Split the two input strings into arrays of numbers
    const arr1 = strArr[0].split(',').map(Number);
    const arr2 = strArr[1].split(',').map(Number);
  
    // Initialize an empty array to store the intersection
    const intersection = [];
  
    // Two pointers to traverse both arrays
    let i = 0;
    let j = 0;
  
    // Find the common elements between the two arrays
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] === arr2[j]) {
        intersection.push(arr1[i]);
        i++;
        j++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
  
    // If there is no intersection, return 'false'
    if (intersection.length === 0) {
      return 'false';
    }
  
    // Convert the intersection array to a comma-separated string
    return intersection.join(',');
  }
  
// Example usage
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])); // Output: "1,4,13"
console.log(FindIntersection(["1, 3, 9, 10, 17", "2, 4, 8, 11, 14"])); // Output: "false"
