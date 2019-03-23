function sumDigits(number) {
    console.log(number)
    let sum = 0;
    if(number < 0){
     number *= -1;
    }
    let str = number.toString()
    console.log(typeof(str))
    for(let i = 0; i < str.length; i++){
      sum += Number(str[i]);
    }
    return sum;
  }
  