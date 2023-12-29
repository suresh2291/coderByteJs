/**
 * Have the function simpleAdding(num) add up all the numbers from 1 to num. For
 * example: if the input is 4 then your program should return 10 because 1 + 2 +
 * 3 + 4 = 10. For the test cases, the parameter num will be any number from 1
 * to 1000.
 */

function simpleAdding(num) {
    if(num<=1000){
        var sum = 0;
  
        for (var i = 1; i <= num; i++) {
          sum += i;
        }
      
        return sum;
    }else{
        return false
    }
    
  }

console.log(simpleAdding(4)); // Output: 10
console.log(simpleAdding(10)); // Output: 55
console.log(simpleAdding(12)); // Output: 78
console.log(simpleAdding(99)); //Output: 4950
console.log(simpleAdding(999)); //Output: 499500
console.log(simpleAdding(1221)); //Output: false
console.log(simpleAdding(222)); //Output: 24753
console.log(simpleAdding(0)); //Output: 0
