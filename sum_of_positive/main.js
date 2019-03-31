function positiveSum(arr) {
    let result = 0
      //go through the array and add all positives
      for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
        let hold = arr[i] 
        result += hold
        }
        }
      return result;
    }