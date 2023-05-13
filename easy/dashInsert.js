/**
 * Have the function dashInsert(str) insert dashes ('-') between each two odd
 * numbers in str. For example: if str is 454793 the output should be 4547-9-3.
 * Don't count zero as an odd number.
 */

function dashInsert(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      result += str[i];
      if (i < str.length - 1 && isOdd(parseInt(str[i])) && isOdd(parseInt(str[i + 1]))) {
        result += "-";
      }
    }
    return result;
  }
  
  function isOdd(num) {
    return num % 2 !== 0 && num !== 0;
  }
  
  const inputStr = "";
  console.log(dashInsert("454793"));
  console.log(dashInsert("02468"));
  console.log(dashInsert("123456789"));
  console.log(dashInsert("13579"));
  console.log(dashInsert("246810"));
  console.log(dashInsert("100200300"));
  