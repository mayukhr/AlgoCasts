function arrayChallenge(arr) {
  let resultArr = [];
  // let counter = 0;
  for(let i = 0; i< arr.length; i++) {
    if(i===0) {
      resultArr.push(0);
    } else {
      let counter = 0;
      for(let j = i; j > 0; j --) {
        if ( arr[i] > arr[j-1] ) {
          counter = counter + Math.abs(arr[i] - arr[i-1]);
        } else if ( arr[i] < arr[j-1] ) {
          counter = counter - Math.abs(arr[i] - arr[i-1]);
        }
      }
      resultArr.push(counter);
    }
  }
  return resultArr;
}

// if ( arr[i] > arr[i-1] ) {
//   counter = counter + Math.abs(arr[i] - arr[i-1]);
//   resultArr.push(counter);
// } else if ( arr[i] < arr[i-1] ) {
//   counter = counter - Math.abs(arr[i] - arr[i-1]);
//   resultArr.push(counter);
// }
console.log(arrayChallenge([2,1,3]))