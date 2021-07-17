// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let i = 0;

    while (i<array.length) {
        chunked.push(array.slice(i, i + size));
        i = i + size;
    }
    return chunked;
}


module.exports = chunk;

// Given solution 1
// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         let last = chunked[chunked.length - 1];
        
//         // If last element does not exist or the size is 'size'
//         // create new arr element
//         if(!last || last.length === size) {
//             chunked.push([element]);
//         } 
//         else {
//             //add to existing chunk
//             last.push(element);
//         }
//     }
//     return chunked;

// }

// MY SOLUTION
// function chunk(array, size) {
//     let bigArr = [], smallArr = [];

//     for(let i=0; i<array.length; i++) {
//         if(smallArr.length < size ) {
//             smallArr.push(array[i]);
//         }  
//         else {
//             bigArr.push(smallArr);
//             smallArr = [];
//             smallArr.push(array[i]);
//         }
//         // bigArr.push(smallArr);
//         if (i+1 == array.length && smallArr.length != 0){
//             bigArr.push(smallArr);
//         }
            
//     }
//     return bigArr;
// }
