/**
 * Have the function arrayAdditionI(arr) take the array of numbers stored in arr
 * and return the string true if any combination of numbers in the array
 * (excluding the largest number) can be added up to equal the largest number in
 * the array, otherwise return the string false. For example: if arr contains
 * [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 =
 * 23. The array will not be empty, will not contain all the same elements, and
 * may contain negative numbers.
 */
/**
To solve the problem, we can follow these steps:

1.Find the largest number in the array and store it in a variable, let's call it maxNum.
2.Remove maxNum from the array.
3.Calculate the sum of all the remaining numbers in the array and store it in a variable, let's call it sum.
4.Check if sum is equal to maxNum. If it is, return "true." Otherwise, continue to the next step.
5.Generate all possible subsets of the remaining numbers using a recursive function.
6.For each subset, calculate its sum and check if it is equal to maxNum. If any subset's sum is equal to maxNum, return "true."
7.If none of the subsets have a sum equal to maxNum, return "false." */
function arrayAdditionI(arr) {
    var maxNum = Math.max(...arr);
    arr.splice(arr.indexOf(maxNum), 1);
    var sum = arr.reduce((a, b) => a + b, 0);
  
    if (sum === maxNum) {
      return "true";
    }
  
    function findSubsetSum(subset, target) {
      if (target === 0) {
        return true;
      }
  
      if (subset.length === 0 || target < 0) {
        return false;
      }
  
      var [first, ...rest] = subset;
      return (
        findSubsetSum(rest, target - first) || findSubsetSum(rest, target)
      );
    }
  
    return findSubsetSum(arr, maxNum) ? "true" : "false";
  }
  
  // Example usage:
  console.log(arrayAdditionI([4, 6, 23, 10, 1, 3])); // Output: true
  