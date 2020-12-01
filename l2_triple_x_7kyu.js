// https://www.codewars.com/kata/568dc69683322417eb00002c/train/javascript
// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

// tripleX("abraxxxas") → true
// tripleX("xoxotrololololololoxxx") → false
// tripleX("softX kitty, warm kitty, xxxxx") → true
// tripleX("softx kitty, warm kitty, xxxxx") → false

function tripleX(str){
    let count = 0
    let strArray = str.split('');
    
    for( let i = 0; i < strArray.length; i++) {
      if(strArray[i] === 'x') {
       count += 1 
      } else if (count === 1){
         return false;
      }
      console.log(count)
      if( count === 3  ) {
      
        return true;
      }
    }
    return false;
  }
  
  