// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).

// Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

function solution(str, ending){
    str = str.split('');
    ending = ending.split('');
    let flag = true;
    str = str.slice(str.length - ending.length)
    
    str.forEach((letter, index) => {
      if(letter !== ending[index]) { 
        flag = false
      } 
    })
    return flag;
  }