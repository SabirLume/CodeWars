// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// Examples :

// Test.assertEquals(iqTest("2 4 7 8 10"),3);
// Test.assertEquals(iqTest("1 2 2"), 1);

// My Experience: 

// For this coding challenge it took me a while to do. I did not realize that the given parameters was a string and not a array of numbers. I learned how to use .split(' ') in order to separate everything in the string that was being entered.

// Test.assertEquals(iqTest("2 4 7 8 10"),3);
// Test.assertEquals(iqTest("1 2 2"), 1);


function iqTest(numbers){
    // ...
    let list = numbers.split(' ')
    console.log(list)
    for(var i = 0 ; i < list.length; i++){
    if(Number(list[i]) % 2 !== 0){
      return i + 1
    
    }
    }
  }