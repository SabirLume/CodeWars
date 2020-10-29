// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
// Write a function that takes an array of numbers (integers for the tests) 
// and a target number. It should find two different items in the array that, 
// when added together, give the target value. The indices of these items should 
// then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid 
// solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, 
// and all of the items will be numbers; target will always be the sum of two 
// different items from that array).

function twoSum(numbers, target) {
    //takes in array , and target
    //adds 2 different items in array
    //and if sum equals total then record the index
        
    for(let i = 0; i < numbers.length ; i++) {
      let  result = [];
      let  tracker = [];
        
      result.push(i);
      tracker.push(numbers[i]);
    
      for(let e = i + 1; e <= numbers.length; e++){
        // always adding the next element in array
        tracker.push(numbers[e])
        result.push(e)
              console.log(result, "before return result")
        if (tracker[0] + tracker[1] === target) {
          console.log(result, "return result")
          return result
        } else {
          // resetting tracker and result to element of outter loop
          tracker = [numbers[i]]
          result = [i]
        }
      } 
    }
  }


// Test.assertSimilar(twoSum([1,2,3], 4).sort(numericalCompare), [0,2]);
// Test.assertSimilar(twoSum([1234,5678,9012], 14690).sort(numericalCompare), [1,2]);
// Test.assertSimilar(twoSum([2,2,3], 4).sort(numericalCompare), [0,1]);