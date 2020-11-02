// Complete the method which returns the number which is most 
// frequent in the given input array. If there is a tie for most 
// frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
function highestRank(arr){
    let result= 0;
    let counter = 0;
    let maxOccurence = 0;
    let pairs = [];
    
    arr = arr.sort((a,b) => a-b);
    //record tuples of unique number and the number of times it was seen
    // Ex. arr = [ 12, 12 , 3, 3] => [[12,2],[3,2]]
    for(let i = 0; i < arr.length; i++) {
      if(i === 0) {
        counter += 1;
      }else if (arr[i] !== arr[i-1]) {
        pairs.push([arr[i-1], counter])
        counter = 1;
      } else if(arr[i] === arr[i-1]){
        counter += 1;
      }
      if(i+1 === arr.length) {
        pairs.push([arr[i-1], counter])
      }
    }
    
    //find the highest pair[1]   [[5,3],[2,3],[9,1]] => maxOccurence = 3
    pairs.forEach(pair => {
      maxOccurence = pair[1] > maxOccurence ? pair[1] : maxOccurence;
    })
  
    //find all pairs with max occurence and choose the highest pair[0]
    //  [[5,3],[2,3],[9,1]] => result = 5
    pairs.forEach(pair => {
      if (pair[1] === maxOccurence && pair[0] > result) {
        result = pair[0]
      }
    })
    return result;
  }

