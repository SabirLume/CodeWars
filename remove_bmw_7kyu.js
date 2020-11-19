https://www.codewars.com/kata/59de795c289ef9197f000c48/train/javascript
// Your task is to write a function that takes one parameter str that MUST be a string and removes all capital and small letters B, M and W.
// If data of the wrong data type was sent as a parameter the function must throw an error with the following specific message:
// new Error("This program only works for text.");
function removeBMW(str){
    try {
      return str.replace(/[bmw]/gi, '');
    } catch (err) {
      throw new SyntaxError("This program only works for text.");
    };
  }