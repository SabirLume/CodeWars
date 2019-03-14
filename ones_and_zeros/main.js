const binaryArrayToNumber = arr => {
let sum = 0
let reversedArray = arr.reverse()
console.log(reversedArray)
for(var i = 0; i < reversedArray.length; i++){
let num = parseInt(reversedArray[i])
let result = Math.pow(2, i) * num

console.log("result" + result)
console.log("sum" + sum)
console.log("num" + num)

sum = result + sum
console.log(sum)
console.log(result)

}
return sum
};


