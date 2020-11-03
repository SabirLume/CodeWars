https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// In this kata you are required to, given a string, replace every 
// letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    let upperCase = lowerCase.toUpperCase();
    let regex = /[A-z]/g;
    let key = [];
    let result = '';
    
    let inputArray = text.match(regex) ? text.match(regex) : [];
    lowerCase = lowerCase.match(regex);
    upperCase = upperCase.match(regex);
  
  
    
    //create pairs for A-z ex. [[a,A],[b,B]...]
    lowerCase.forEach((letter, index) => {
       key.push([lowerCase[index], upperCase[index]]);
    })
  
    inputArray.forEach((letter, index) => {
      key.forEach((subArray, subIndex) => {
        if(letter === subArray[0] || letter === subArray[1]) {
          result = result.concat((subIndex + 1) + ' ');
        }
      })
    })
                
    return result.trim()
  
  }