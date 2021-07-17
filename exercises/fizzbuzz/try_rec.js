// //  let a = [1,2,5,10,20];
//  let a = [4,4, 4,4];
// let weight = 0;
// function recWt(unsorted_arr) {
//     if (unsorted_arr.length === 0) {
//         return 0;
//     } else if (unsorted_arr.length === 1) {
//         return 0;
//     } else if (unsorted_arr.length === 2) {
//         return unsorted_arr[0] + unsorted_arr[1];
//     } 
//     let arr = unsorted_arr.sort(function(a, b){return a - b});
//     let firstTwoSum = arr[0] + arr[1];
//     arr.splice(0,2);
//     arr.push(firstTwoSum);
//     // weight = firstTwoSum;
//     weight = firstTwoSum + recWt(arr);
    
//     return weight;
// }
// console.log(recWt(a));

let str = 'Codingame';
let str_arr = [...str];

for(let i=str_arr.length; i>0; i--) {
  str_arr.unshift(str_arr.pop());
  
  console.log(str_arr.join(''));
}