// https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript
// In this Kata, you will be given an array of numbers in which two numbers 
// occur once and the rest occur only twice. Your task will be to return the 
// sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 
// occur once, and their sum is 15. Every other number occurs twice.
function repeats(arr){
  let repeats = [];
  let result = 0;
  
  arr.forEach( (number, index) => {
    arr.forEach( (sub, subIndex) => {
      if(sub === number && index != subIndex) {
        repeats.push(sub);
      }
    })
  })

  repeats = new Set(repeats);
  arr.forEach(number => {
    if(!repeats.has(number) ){
       result += number
      }
  })

  return result;
};