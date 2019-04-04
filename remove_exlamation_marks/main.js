function removeExclamationMarks(s) {
//go through each letter in string
let array = s.split('');
console.log(array)
  for(let i = 0; i < array.length; i++){
  if(array[i] === '!'){
    array.splice(i,1) 
  }
  }
  //brings the separated strings together
  return array.join('');

}

Test.assertSimilar(removeExclamationMarks("Hello World!"), "Hello World");