function validatePIN (pin) {
  const newPin = pin.replace(/\s/g, "")
  if(newPin.length == 6 || newPin.length === 4){
    for(let i = 0; i < newPin.length; i++){
      if(isNaN(Number(newPin[i]))){
        // If any character in the string is not a number
        // return false
        return false
      }
    }
    // Return true if all the characters in the string are numbers
    // at the end of the for loop
    return true
  }
    // Return false if the pin length is not 4 or 6
    return false
  }
