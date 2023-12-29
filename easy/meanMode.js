/**
 * Have the function meanMode(arr) take the array of numbers stored in arr and
 * return 1 if the mode equals the mean, 0 if they don't equal each other (ie.
 * [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
 * The array will not be empty, will only contain positive integers, and will
 * not contain more than one mode.
 */

function meanMode(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const mean = sum / arr.length;
    const modeMap = new Map();
  
    let mode = null;
    let maxCount = 0;
  
    for (const num of arr) {
      modeMap.set(num, (modeMap.get(num) || 0) + 1);
  
      if (modeMap.get(num) > maxCount) {
        mode = num;
        maxCount = modeMap.get(num);
      }
    }
  
    return mean === mode ? 1 : 0;
  }
  
  // Example usage:
  console.log(meanMode([5, 3, 3, 3, 1])); // Output: 1
  console.log(meanMode([1, 2, 3, 4, 5])); // Output: 0
  