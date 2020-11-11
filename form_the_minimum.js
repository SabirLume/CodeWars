// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript
// Given a list of digits, return the smallest number that could be formed from 
// these digits, using the digits only once (ignore duplicates).
function minValue(values){
    let result = ''
    //create object with no repeats, sort it, add each value to result , parse and return
    values = new Set(values.sort(( a, b )=> a - b )).forEach( value => result += value )
    return parseInt(result)
  }