// https://www.codewars.com/kata/5a7893ef0025e9eb50000013/train/javascript
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
let maxGap = numbers => {
    numbers = numbers.sort((a,b) => b - a);
    let result = numbers[0] - numbers[1];
    
    for(i = 0; i < numbers.length; i++){
       if(numbers[i] - numbers[i + 1] > result){
         result = numbers[i] - numbers[i + 1];
       }
     }
    return result;
   }