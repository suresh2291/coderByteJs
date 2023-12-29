/**
 * Have the function thirdGreatest(strArr) take the array of strings stored in
 * strArr and return the third largest word within in. So for example: if strArr
 * is ["hello", "world", "before", "all"] your output should be world because
 * "before" is 6 letters long, and "hello" and "world" are both 5, but the
 * output should be world because it appeared as the last 5 letter word in the
 * array. If strArr was ["hello", "world", "after", "all"] the output should be
 * after because the first three words are all 5 letters long, so return the
 * last one. The array will have at least three strings and each string will
 * only contain letters.
 */

//solution 1
function thirdGreatest(strArr) {
    let first = '';
    let second = '';
    let third = '';
  
    for (let i = 0; i < strArr.length; i++) {
      let word = strArr[i];
  
      if (word.length > first.length) {
        third = second;
        second = first;
        first = word;
      } else if (word.length > second.length) {
        third = second;
        second = word;
      } else if (word.length > third.length) {
        third = word;
      }
    }
  
    return third;
  }

  //solution2

  function thirdGreat(strArr) {
    var sortedArr = strArr.sort((a, b) => b.length - a.length);
    return sortedArr[2];
  }
console.log(thirdGreatest(["hello", "world", "before", "all"]));  // Output: world
console.log(thirdGreatest(["hello", "world", "after", "all"]));   // Output: after
console.log(thirdGreatest(["apple", "banana", "cherry", "date"])); // Output: cherry
console.log(thirdGreatest(["Today", "is", "the", "greatest", "day", "ever"])); // Output: ever


console.log(thirdGreat(["hello", "world", "before", "all"]));  // Output: world
console.log(thirdGreat(["hello", "world", "after", "all"]));   // Output: after
console.log(thirdGreat(["apple", "banana", "cherry", "date"])); // Output: cherry
console.log(thirdGreat(["Today", "is", "the", "greatest", "day", "ever"])); // Output: ever