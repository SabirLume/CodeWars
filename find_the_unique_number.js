// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique
function findUniq(arr) {

    let mismatch = [];
    let match = [];
    for(let i = 0; i < arr.length; i++){
      for (let x = 1; x < arr.length; x++){
        if(arr[i] !== arr[x]){
          mismatch.push(arr[i])
          mismatch.push(arr[x])
        } else {
          match.push(arr[x])
        }
      if(match.length >= 1 && mismatch.length >= 1) {
            return mismatch.find(element => element != match[0])
       } 
      }
    }
  }