// https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript
// return the two oldest/oldest ages within the array of ages passed in.
// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]
function twoOldestAges(ages){
    let result = []
    ages.sort((a, b) => a - b).forEach((age, index, array) => {
      if(array.length - 1 === index || array.length - 2 === index) {
          result.push(age)
      }
    })
     return result                                  
  }
  