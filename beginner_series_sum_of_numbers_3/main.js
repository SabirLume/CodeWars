function GetSum( a,b ){
    let low; 
    let high;
    let result = 0
      if( a == b){
      return a
      }else{
        if(a > b){
        low = b
        high = a
        }else{
        high = b
        low = a
        
        }for(let i = low; i <= high; i++){
        result += i
      }
    }
      return result
       //sort a,b from smallest to greatest 
       //go through a and each number until reaching b 
       // making equal to an var
       //add all numbers and make them equal to a result
    }