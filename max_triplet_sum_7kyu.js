// codewars.com/kata/5aa1bcda373c2eb596000112/train/javascript
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
// Array/list size is at least 3 .
// Array/list numbers could be a mixture of positives , negatives and zeros .
// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
// 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)

function maxTriSum(numbers){
    let res = 0;
    //remove duplicates, sort (desc), grab first 3,  sum!
    numbers = Array.from(new Set(numbers.sort((a, b) => b - a))).slice(0, 3).forEach(number => res += number)
    
    return res
  }