let a = [1,4,3,6,88,64,32,0,8];
let count = 0;
function mergeSort(arr=[]) {
    let center, leftArr, rightArr;
    if(arr.length<2) {
        return arr;
    } 
    else {
        center = Math.floor(arr.length/2);
        leftArr = arr.slice(0, center);
        rightArr = arr.slice(center, arr.length);
        console.log(`center=${center}----leftArr=${leftArr}---rightArr=${rightArr}`);
        return mergeSortedArrays (
            mergeSort(leftArr),
            mergeSort(rightArr)
        )
    }
}
function mergeSortedArrays(leftArr, rightArr) {
    let i=j=0;
    const mergedArr = [];
    while(i<leftArr.length && j<rightArr.length) {
        if(leftArr[i]<rightArr[j]) {
            mergedArr.push(leftArr[i]);
            i++;
        } else {
            mergedArr.push(rightArr[j]);
            j++;
        }
        count=count + (leftArr.length - i)
    }
    if(i<leftArr.length) {
        mergedArr.push(...leftArr.slice(i, leftArr.length));
    }
    if(j<rightArr.length) {
        mergedArr.push(...rightArr.slice(j, rightArr.length));
    }
    return mergedArr;
}

// console.log(mergeSortedArrays([1,5,7, 11, 12], [2,4,6, 7]))
console.log(mergeSort(a));