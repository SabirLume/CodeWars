describe('summation', function () {
  it('should return the correct total', function () {
    Test.assertEquals(summation(1), 1)
    Test.assertEquals(summation(8), 36)
  })
})


var summation = function (num) {
let result = 0
//going through each number less than the input 
  for(let i = 0; i <= num; i++){
  //for each number less than input add them
  result += i
  
  }
  return(result)
}