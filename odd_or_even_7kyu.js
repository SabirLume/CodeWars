// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
// Given a list of numbers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
const oddOrEven = array =>  {
    let result = 0;
    array.forEach(number => result += number);
    return result % 2 == 0 ? "even" : "odd"
  }