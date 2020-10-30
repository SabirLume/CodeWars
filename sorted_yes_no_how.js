// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
// Complete the method which accepts an array of integers, 
// and returns one of the following:

// "yes, ascending" - if the numbers in 
// the array are sorted in an ascending order
// "yes, descending" - if the numbers in 
// the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.
function isSortedAndHow(array) {
    let isAscending = false;
    let isDesending = false;

    for (let i = 0; i < array.length; i++){
      for(let k = 1; k < array.length; k++){
        if (array[k - 1] < array[k]) {
          isAscending = true;
        } else if (array[k - 1] > array[k]) {
          isDesending = true;
        } 
      }

      if(isAscending && isDesending){
        return "no"
      }else if(isAscending){
        return "yes, ascending" 
      }else{
        return "yes, descending"
      }  
    }
  }