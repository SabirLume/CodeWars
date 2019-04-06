/* Complete the function which takes two arguments and returns all numbers which are divisible by given divisor. First argument is an array of numbers and the second is the divisor.*/

function divisibleBy(numbers, divisor){
//create a var for an empty array
  var divisible = []
  // looping through the array with a for loop
  for (var i = 0; i<= numbers.length; i++){
  // conditional
    if (numbers[i] % divisor === 0){
      divisible.push(numbers[i])
    }
  }
  return divisible
}