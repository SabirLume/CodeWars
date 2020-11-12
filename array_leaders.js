// https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript
// An element is leader if it is greater than The Sum all the elements to its right side.
var arrayLeaders = numbers => {
    let result = [];
  
    numbers.forEach( (number, index) => {
      let ress = 0;
      
      for (let i = 1 + index; i < numbers.length; i++) {
        ress += numbers[i]
      }  
      
      if(number > ress) {
        result.push(number);
      }
      
      res = 0
  
    })
    return result
  }