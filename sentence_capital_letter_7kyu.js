// https://www.codewars.com/kata/5bf774a81505a7413400006a/train/javascript
// input:

// "hello. my name is inigo montoya. you killed my father. prepare to die."

// output:

// "Hello. My name is inigo montoya. You killed my father. Prepare to die."
let fix = paragraph => {
    let upperCase = false;
    let result = '';
    paragraph = paragraph.split('')
    
    paragraph.forEach((character,index) => {
      if (character == '.') {
         upperCase = true;
      }   
      if (index === 0) {
      result += character.toUpperCase();
      } else if (upperCase && (character !== '.') && (character !== ' ')) {
        upperCase = false;
        result += character.toUpperCase();
        console.log(result, "rsult");
      } else {
        result += character;
      }
    })
    return result
  }