// Test.describe("nbYear",function() {
// Test.it("Basic tests",function() {    
//     Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
//     Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
//     Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
// })})

function nbYear(p0, percent, aug, p) {
    
    let cp = p0
    let total = 0
    let year = 0
    while(total < p) {
    year = year + 1
    total = (cp * (percent / 100)) + cp + aug
      //compute next year's population as total
    cp = total
    }
  
    return year
}