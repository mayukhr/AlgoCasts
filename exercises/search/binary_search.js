const binarySearch = (arr=[], target=0) => {
    let arrStart = 0;
    let arrEnd = arr.length - 1;

    function search(start, end) {
        if(start>end) return -1;
        const mid = Math.floor((start + end)/2);
        // const mid = Math.floor(start + (end - start) / 2)
        console.log(`start = ${start} end= ${end}, mid = ${mid}`);
        if(arr[mid] === target) {
            return mid;
        }
        else if (target > mid) {
            return search(mid+1, end);
        }
        else if (target < mid) {
            return search(start, mid-1);
        }
         {
            return -1;
        }
    }

    return search(arrStart, arrEnd);

} 

console.log(binarySearch([1,2,5,6,8,66,77,88,99,3333,4444,66555], 1));

console.log(binarySearch([1,2,5,6,8,66,77,88,99,3333,4444,66555], 66555));

// console.log(binarySearch([1,2,5,6,8,66,77,88,99,3333,4444,66555], 66155));

console.log(binarySearch([1,2,5,6,8,66,77,88,99,3333,4444,66555], 71));