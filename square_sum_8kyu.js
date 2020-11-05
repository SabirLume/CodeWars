// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
// Complete the square sum function so that it squares each 
// number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let result = 0;
    numbers.forEach(number =>{
      result += number ** 2;
    })
    return result;
  }