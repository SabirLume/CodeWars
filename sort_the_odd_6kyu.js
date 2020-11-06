https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
function sortArray(array) {
    let oddPositions = [];
    let sortOdd = [];
    
    // record all the indexes where there is an odd number and the number
    //sort the number from least to greatest use those indexes to put items back in array
    array.forEach((number, index) => {
      if(!(number % 2 === 0)) {
        oddPositions.push(index)
        sortOdd.push(number)
      }
    })
    
    sortOdd = sortOdd.sort((a, b) => a - b)
    sortOdd.forEach((number, index) => {
      array[oddPositions[index]] = number
    })
    return array
  }