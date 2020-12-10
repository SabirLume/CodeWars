// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
let findMiddleElement = inputArray =>  {
    let result;
    let unsortedArray = [...inputArray]
    let middleElement = inputArray.sort((a,b) => a - b)[1];
  
    unsortedArray.find((element, index) => { 
      if (middleElement === element) {
        result = index;
      } 
    })
    return result
  };
  
  