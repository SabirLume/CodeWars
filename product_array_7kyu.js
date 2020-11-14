// https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript
// The first element 10 is the product of all array's elements except the first element *1***

// The second element 2 is the product of all array's elements except the second element 5

// The Third element 5 is the product of all array's elements except the Third element 2.
function productArray(numbers){
    let result = []
    numbers.forEach((number, index) => {
      let res = 1;
      numbers.forEach((subNumber, subIndex) => {
        if(index !== subIndex) {
          res *= subNumber
        }
      })
      result.push(res)
    })
    return result
  }