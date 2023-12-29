/**
 * Have the function powersOfTwo(num) take the num parameter being passed which
 * will be an integer and return the string true if it's a power of two. If it's
 * not return the string false. For example if the input is 16 then your program
 * should return the string true but if the input is 22 then the output should
 * be the string false.
 */

const powersOfTwo = num => num !== 0 && (num & (num - 1)) === 0;
console.log(powersOfTwo(16));
console.log(powersOfTwo(121));
console.log(powersOfTwo(1991));
console.log(powersOfTwo(0));
console.log(powersOfTwo(24));
console.log(powersOfTwo(35));
